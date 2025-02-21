import { useState, useEffect } from "react";

function OppLineOfBattle() {
    const boardSize = 10;
    const shipLengths = [2, 3, 3, 4, 5];
  
    const [ships, setShips] = useState([]);
    const [hits, setHits] = useState(new Set());
    const [misses, setMisses] = useState(new Set()); // Track missed shots
  
    useEffect(() => {
      setShips(placeShips());
    }, []);
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function placeShips() {
      let placedShips = [];
      let occupiedCells = new Set();
  
      for (let length of shipLengths) {
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
          for (let i = 0; i < length; i++) {
            let cell = isHorizontal
              ? row * boardSize + (col + i) + 1
              : (row + i) * boardSize + col + 1;
            shipCoords.push(cell);
          }
  
          if (!shipCoords.some(cell => occupiedCells.has(cell))) {
            validPlacement = true;
            shipCoords.forEach(cell => occupiedCells.add(cell));
          }
        }
  
        placedShips.push(shipCoords);
      }
  
      return placedShips;
    }
  
    function isShipCell(id) {
      return ships.some(ship => ship.includes(id));
    }
  
    function isHit(id) {
      return hits.has(id);
    }
  
    function isMiss(id) {
      return misses.has(id);
    }
  
    function isShipSunk(ship) {
      return ship.every(cell => hits.has(cell));
    }
  
    function handleCellClick(id) {
      if (!hits.has(id) && !misses.has(id)) {
        setHits(prevHits => {
          const newHits = new Set([...prevHits]);
          const newMisses = new Set([...misses]);
  
          if (isShipCell(id)) {
            newHits.add(id);
          } else {
            newMisses.add(id);
          }
  
          // Check if any ship has been sunk
          ships.forEach(ship => {
            if (ship.every(cell => newHits.has(cell))) {
              console.log(`Ship of length ${ship.length} has been sunk!`);
            }
          });
  
          setMisses(newMisses); // Update misses state
          return newHits;
        });
      }
    }
  
    const rows = [];
    for (let i = 1; i <= 100; i++) {
      const isShip = isShipCell(i);
      const isHitCell = isHit(i);
      const isMissCell = isMiss(i);
      const ship = ships.find(s => s.includes(i));
      const isSunk = ship && isShipSunk(ship);
  
      rows.push(
        <div
          key={i}
          className={`border-2 text-center w-10 h-10 flex items-center justify-center 
          ${isSunk ? "bg-red-600" 
          : isHitCell ? "bg-yellow-500" 
          : isMissCell ? "bg-white" 
          : isShip ? "bg-blue-500" 
          : "bg-gray-400"}`}
          onClick={() => handleCellClick(i)} 
        >
          {i}
        </div>
      );
    }
  
    return (
      <div className="pt-10 flex justify-center">
        <div className="grid grid-cols-10 grid-rows-10 w-96 h-96">
          {rows}
        </div>
      </div>
    );
  }
  
  export default OppLineOfBattle;