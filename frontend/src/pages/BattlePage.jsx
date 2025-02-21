import { useState } from "react";
import P1LineOfBattle from "../components/P1LineOfBattle";
import P2LineOfBattle from "../components/P2LineOfBattle";
import P1Ships from "../components/P1Ships";
import P2Ships from "../components/P2Ships";
import TitleScreen from "../components/TitleScreen";
import Navbar from "../components/Navbar";
import Rules from "../components/Rules";
import OppLineOfBattle from "../components/OppLineOfBattle";

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
  // Opponent's ship coordinates
  const [oppDestroyerCords, setOppDestroyerCords] = useState([]);
  const [oppSubmarineCords, setOppSubmarineCords] = useState([]);
  const [oppCruiserCords, setOppCruiserCords] = useState([]);
  const [oppBattleshipCords, setOppBattleshipCords] = useState([]);
  const [oppCarrierCords, setOppCarrierCords] = useState([]);
  const [oppOccupiedCords, setOppOccupiedCords] = useState([]);
  // Phase and Gamemode Logic
  const [phase, setPhase] = useState("p1set");
  // gameStart, rules, p1set, p2set, p1atk, p2atk, cpuatk, victoryAtSea
  const [gamemode, setGamemode] = useState("single");
  // single, versus, multi
  return (
    <>
      <div className={phase === "gameStart" ? "hidden" : ""}>
        <Navbar />
      </div>
      <div className={phase === "gameStart" ? "-mt-10" : "hidden"}>
        <TitleScreen setPhase={setPhase} setGamemode={setGamemode} />
      </div>
      <div className={phase === "rules" ? "-mt-10" : "hidden"}>
        <Rules setPhase={setPhase} />
      </div>
      <div className="flex justify-evenly">
        <div
          className={
            phase === "p1set" || phase === "cpuatk" || phase === "p1atk"
              ? "flex flex-col gap-5 items-center justify-center h-[calc(100vh-20rem)]"
              : "hidden"
          }
        >
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
          <div className={phase === "p1set" ? "" : "hidden"}>
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
              setPhase={setPhase}
              gamemode={gamemode}
              oppDestroyerCords={oppDestroyerCords}
              setOppDestroyerCords={setOppDestroyerCords}
              setOppOccupiedCords={setOppOccupiedCords}
              oppOccupiedCords={oppOccupiedCords}
            />
          </div>
        </div>
        <div
          className={phase === "p1atk" || phase === "cpuatk" ? "" : "hidden"}
        >
          <OppLineOfBattle
            oppDestroyerCords={oppDestroyerCords}
            oppCruiserCords={oppCruiserCords}
            oppSubmarineCords={oppSubmarineCords}
            oppBattleshipCords={oppBattleshipCords}
            oppCarrierCords={oppCarrierCords}
            setOppDestroyerCords={setOppDestroyerCords}
            setOppCruiserCords={setOppCruiserCords}
            setOppSubmarineCords={setOppSubmarineCords}
            setOppBattleshipCords={setOppBattleshipCords}
            setOppCarrierCords={setOppCarrierCords}
            setOppOccupiedCords={setOppOccupiedCords}
            oppOccupiedCords={oppOccupiedCords}
          />
        </div>
        <div
          className={phase === "p2set" ? "flex gap-5 items-center" : "hidden"}
        >
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
