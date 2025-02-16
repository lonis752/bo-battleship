import { useState } from "react";
import P1LineOfBattle from "../components/P1LineOfBattle";
import P2LineOfBattle from "../components/P2LineOfBattle";
import P1Ships from "../components/P1Ships";
import P2Ships from "../components/P2Ships";
import BattleConfig from "../components/BattleConfig";

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
  // Phase and Gamemode Logic
  const [phase, setPhase] = useState("p1set");
  // p1set, p2set, p1atk, p2atk
  const [gamemode, setGamemode] = useState("");
  return (
    <>
    <div>
        <BattleConfig />
    </div>
    <div>
        
    </div>
      <div className="flex justify-evenly">
        <div className={phase==="p1set" ? "flex gap-5 items-center" : "hidden"}>
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
          <P1LineOfBattle
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
        <div className={phase==="p2set" ? "flex gap-5 items-center" : "hidden"}>
          <P2LineOfBattle
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
