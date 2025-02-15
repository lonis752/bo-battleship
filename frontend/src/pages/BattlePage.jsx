import { useState } from "react";
import P1Gameboard from "../components/P1Gameboard";
import P2Gameboard from "../components/P2Gameboard";
import P1Ships from "../components/P1Ships";
import P2Ships from "../components/P2Ships";

function BattlePage() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [selectedShip, setSelectedShip] = useState("");
  // Ship Coordinates
  const [destroyerCords, setDestroyerCords] = useState([]);
  const [submarineCords, setSubmarineCords] = useState([]);
  const [cruiserCords, setCruiserCords] = useState([]);
  const [battleshipCords, setBattleshipCords] = useState([]);
  const [carrierCords, setCarrierCords] = useState([]);
  const [occupiedCords, setOccupiedCords] = useState([]);
  console.log(selectedShip);
  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex gap-5 items-center">
          <P1Ships
            isHorizontal={isHorizontal}
            setIsHorizontal={setIsHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
            destroyerCords={destroyerCords}
            setDestroyerCords={setDestroyerCords}
            submarineCords={submarineCords}
            setSubmarineCords={setSubmarineCords}
            cruiserCords={cruiserCords}
            setCruiserCords={setCruiserCords}
            battleshipCords={battleshipCords}
            setBattleshipCords={setBattleshipCords}
            carrierCords={carrierCords}
            setCarrierCords={setCarrierCords}
            occupiedCords={occupiedCords}
            setOccupiedCords={setOccupiedCords}
          />
          <P1Gameboard
            isHorizontal={isHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
            destroyerCords={destroyerCords}
            setDestroyerCords={setDestroyerCords}
            submarineCords={submarineCords}
            setSubmarineCords={setSubmarineCords}
            cruiserCords={cruiserCords}
            setCruiserCords={setCruiserCords}
            battleshipCords={battleshipCords}
            setBattleshipCords={setBattleshipCords}
            carrierCords={carrierCords}
            setCarrierCords={setCarrierCords}
            occupiedCords={occupiedCords}
            setOccupiedCords={setOccupiedCords}
          />
        </div>
        <div className="flex gap-5 items-center hidden">
          <P2Gameboard
            isHorizontal={isHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
            destroyerCords={destroyerCords}
            setDestroyerCords={setDestroyerCords}
            submarineCords={submarineCords}
            setSubmarineCords={setSubmarineCords}
            cruiserCords={cruiserCords}
            setCruiserCords={setCruiserCords}
            battleshipCords={battleshipCords}
            setBattleshipCords={setBattleshipCords}
            carrierCords={carrierCords}
            setCarrierCords={setCarrierCords}
            occupiedCords={occupiedCords}
            setOccupiedCords={setOccupiedCords}
          />
          <P2Ships
            isHorizontal={isHorizontal}
            setIsHorizontal={setIsHorizontal}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}
            destroyerCords={destroyerCords}
            setDestroyerCords={setDestroyerCords}
            submarineCords={submarineCords}
            setSubmarineCords={setSubmarineCords}
            cruiserCords={cruiserCords}
            setCruiserCords={setCruiserCords}
            battleshipCords={battleshipCords}
            setBattleshipCords={setBattleshipCords}
            carrierCords={carrierCords}
            setCarrierCords={setCarrierCords}
            occupiedCords={occupiedCords}
            setOccupiedCords={setOccupiedCords}
          />
        </div>
      </div>
    </>
  );
}

export default BattlePage;
