import { useState, useEffect } from "react";

function OppLineOfBattle({
  setPhase,
  cpuHitCords = [],
  setCpuHitCords,
  cpuMissCords = [],
  setCpuMissCords,
  phase,
  occupiedCords,
  winner,
  setWinner,
}) {
  const boardSize = 10;
  const shipLengths = [2, 3, 3, 4, 5];
  const shipNames = [
    "Destroyer",
    "Cruiser",
    "Submarine",
    "Battleship",
    "Carrier",
  ];

  const [ships, setShips] = useState([]);
  const [hits, setHits] = useState(new Set());
  const [misses, setMisses] = useState(new Set()); // Track missed shots
  const [sunkShips, setSunkShips] = useState(new Set());
  const [events, setEvents] = useState("");

  useEffect(() => {
    setShips(placeShips());
  }, []);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function placeShips() {
    let placedShips = [];
    let occupiedCells = new Set();

    for (let i = 0; i < shipLengths.length; i++) {
      let length = shipLengths[i];
      let validPlacement = false;
      let shipCoords = [];

      while (!validPlacement) {
        let isHorizontal = Math.random() < 0.5;
        let row = getRandomInt(0, boardSize - 1);
        let col = getRandomInt(0, boardSize - 1);

        if (isHorizontal && col + length > boardSize) {
          col = boardSize - length;
        } else if (!isHorizontal && row + length > boardSize) {
          row = boardSize - length;
        }

        shipCoords = [];
        for (let j = 0; j < length; j++) {
          let cell = isHorizontal
            ? row * boardSize + (col + j) + 1
            : (row + j) * boardSize + col + 1;
          shipCoords.push(cell);
        }

        if (!shipCoords.some((cell) => occupiedCells.has(cell))) {
          validPlacement = true;
          shipCoords.forEach((cell) => occupiedCells.add(cell));
        }
      }

      placedShips.push({ coords: shipCoords, name: shipNames[i] });
    }

    return placedShips;
  }

  function isShipCell(id) {
    return ships.some((ship) => ship.coords.includes(id));
  }

  function isHit(id) {
    return hits.has(id);
  }

  function isMiss(id) {
    return misses.has(id);
  }

  function isShipSunk(ship) {
    return ship.coords.every((cell) => hits.has(cell));
  }

  function handleCellClick(id) {
    if (phase === "victoryAtSea") return; // Skip if the game is over

    if (!hits.has(id) && !misses.has(id)) {
      setHits((prevHits) => {
        const newHits = new Set([...prevHits]);
        const newMisses = new Set([...misses]);
        const newSunkShips = new Set([...sunkShips]);

        if (isShipCell(id)) {
          newHits.add(id);
        } else {
          newMisses.add(id);
        }

        // Check if any ship has been sunk and only alert if it's the first time
        ships.forEach((ship) => {
          if (
            ship.coords.every((cell) => newHits.has(cell)) &&
            !newSunkShips.has(ship.name)
          ) {
            newSunkShips.add(ship.name);
            setEvents(`Opponent's ${ship.name} has been sunk!`);
          }
        });

        setSunkShips(newSunkShips); // Update sunk ships state
        setMisses(newMisses); // Update misses state
        return newHits;
      });
    }
    setPhase("cpuatk");
  }

  function checkWinner(arr1, arr2) {
    return arr1.every((num) => arr2.includes(num));
  }

  function cpuAttack() {
    if (phase === "victoryAtSea") return; // Skip attack if the game is over

    let attackPos;

    // Ensure attackPos is unique
    do {
      attackPos = Math.floor(Math.random() * 101); // Values between 0 and 100 (inclusive)
    } while (
      cpuHitCords.includes(attackPos) ||
      cpuMissCords.includes(attackPos)
    );

    // Check whether the attack position hits or misses
    if (occupiedCords.includes(attackPos)) {
      setCpuHitCords((prev) => {
        if (!prev.includes(attackPos)) {
          return [...prev, attackPos]; // Add position if it's not already there
        }
        return prev; // Return the same state if position is already present
      });
    } else {
      setCpuMissCords((prev) => {
        if (!prev.includes(attackPos)) {
          return [...prev, attackPos]; // Add position if it's not already there
        }
        return prev; // Return the same state if position is already present
      });
    }
    setPhase("p1atk");

    // Check if the CPU wins (all occupiedCords hit)
    if (checkWinner(occupiedCords, cpuHitCords)) {
      setPhase("victoryAtSea");
      setWinner("CPU");
      alert("CPU WINS");
      setShips([]);
      setHits(new Set());
      setMisses(new Set());
      setSunkShips(new Set());
      setEvents("");
      return;
    }

    // Check if the player wins (all ships' cells hit)
    if (ships.every((ship) => ship.coords.every((cell) => hits.has(cell)))) {
      setPhase("victoryAtSea");
      setWinner("Player 1");
      alert("YOU WIN");
      setShips([]);
      setHits(new Set());
      setMisses(new Set());
      setSunkShips(new Set());
      setEvents("");
      return;
    }
  }

  const rows = [];
  for (let i = 1; i <= 100; i++) {
    const isShip = isShipCell(i);
    const isHitCell = isHit(i);
    const isMissCell = isMiss(i);
    const ship = ships.find((s) => s.coords.includes(i));
    const isSunk = ship && isShipSunk(ship);

    rows.push(
      <div
        key={i}
        className={`border-2 text-center w-10 h-10 flex items-center justify-center font-bold text-3xl
          ${
            isSunk
              ? "bg-red-600"
              : isHitCell
              ? "bg-red-300"
              : isMissCell
              ? "bg-white"
              : "bg-gray-400 cursor-pointer"
          }`}
        onClick={() => {
          if (phase === "p1atk" && !hits.has(i) && !misses.has(i)) {
            handleCellClick(i);
            setTimeout(() => {
              cpuAttack();
            }, 1);
          }
        }}
      >
        {isSunk || isHit(i) ? <img src="hit.png" /> : <p>•</p>}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center pt-5">
        <div className="grid grid-cols-10 grid-rows-10 w-96 h-96">{rows}</div>
      </div>
      <p className="text-center pt-5">{events}</p>
    </>
  );
}

export default OppLineOfBattle;
