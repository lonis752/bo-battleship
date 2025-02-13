import { useState } from "react";
import Gameboard from "../components/gameboard";
import Ships from "../components/Ships";

function BattlePage() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [selectedShip, setSelectedShip] = useState("");
  const [shipCords, setShipCords] = useState("");
  console.log(selectedShip);
  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex gap-5 items-center">
          <Ships
            isHorizontal={isHorizontal}
            setIsHorizontal={setIsHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
          />
          <Gameboard
            isHorizontal={isHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
          />
        </div>
        <div className="flex gap-5 items-center hidden">
          <Gameboard
            isHorizontal={isHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
          />
          <Ships
            isHorizontal={isHorizontal}
            setIsHorizontal={setIsHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
          />
        </div>
      </div>
    </>
  );
}

export default BattlePage;
