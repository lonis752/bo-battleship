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
  const shipNames = ["Destroyer", "Cruiser", "Submarine", "Battleship", "Carrier"];

  const [ships, setShips] = useState([]);
  const [hits, setHits] = useState(new Set());
  const [misses, setMisses] = useState(new Set());
  const [sunkShips, setSunkShips] = useState(new Set());
  const [events, setEvents] = useState("");

  useEffect(() => {
    setShips(placeShips());
  }, []);

  function placeShips() {
    let placedShips = [];
    let occupiedCells = new Set();

    for (let i = 0; i < shipLengths.length; i++) {
      let length = shipLengths[i];
      let validPlacement = false;
      let shipCoords = [];

      while (!validPlacement) {
        let isHorizontal = Math.random() < 0.5;
        let row = Math.floor(Math.random() * boardSize);
        let col = Math.floor(Math.random() * boardSize);

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
    if (phase === "victoryAtSea") return;

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

        ships.forEach((ship) => {
          if (
            ship.coords.every((cell) => newHits.has(cell)) &&
            !newSunkShips.has(ship.name)
          ) {
            newSunkShips.add(ship.name);
            setEvents(`Opponent's ${ship.name} has been sunk!`);
          }
        });

        setSunkShips(newSunkShips);
        setMisses(newMisses);
        return newHits;
      });
    }
    setPhase("cpuatk");
  }

  function checkWinner(arr1, arr2) {
    return arr1.every((num) => arr2.includes(num));
  }

  function cpuAttack() {
    if (phase === "victoryAtSea") return;

    let attackPos;
    do {
      attackPos = Math.floor(Math.random() * 101);
    } while (
      cpuHitCords.includes(attackPos) ||
      cpuMissCords.includes(attackPos)
    );

    if (occupiedCords.includes(attackPos)) {
      setCpuHitCords((prev) => (!prev.includes(attackPos) ? [...prev, attackPos] : prev));
    } else {
      setCpuMissCords((prev) => (!prev.includes(attackPos) ? [...prev, attackPos] : prev));
    }
    setPhase("p1atk");

    if (checkWinner(occupiedCords, cpuHitCords)) {
      setPhase("victoryAtSea");
      setWinner("CPU");
      alert("CPU WINS");
      resetGame();
      return;
    }

    if (ships.every((ship) => ship.coords.every((cell) => hits.has(cell)))) {
      setPhase("victoryAtSea");
      setWinner("Player 1");
      alert("YOU WIN");
      resetGame();
      return;
    }
  }

  function resetGame() {
    setShips([]);
    setHits(new Set());
    setMisses(new Set());
    setSunkShips(new Set());
    setEvents("");
  }

  // Generate 10 rows with 10 cells each
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const rowCells = [];
    for (let col = 0; col < boardSize; col++) {
      const id = row * boardSize + col + 1;
      const isShip = isShipCell(id);
      const isHitCell = isHit(id);
      const isMissCell = isMiss(id);
      const ship = ships.find((s) => s.coords.includes(id));
      const isSunk = ship && isShipSunk(ship);

      rowCells.push(
        <div
          key={id}
          className={`border-2 w-5 md:w-9.5 h-5 md:h-9.5 flex items-center justify-center font-bold text-3xl
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
            if (phase === "p1atk" && !hits.has(id) && !misses.has(id)) {
              handleCellClick(id);
              setTimeout(() => {
                cpuAttack();
              }, 1);
            }
          }}
        >
          {isSunk || isHit(id) ? <img src="hit.png" /> : <p className="text-xs sm:text-2xl">•</p>}
        </div>
      );
    }
    board.push(
      <div key={row} className="flex">{rowCells}</div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center pt-5">
        <div className="flex flex-col">{board}</div>
      </div>
      <p className="text-center pt-5">{events}</p>
    </>
  );
}

export default OppLineOfBattle;
