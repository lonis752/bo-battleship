function P1Ships({
  isHorizontal,
  setIsHorizontal,
  selectedShip,
  setSelectedShip,
  destroyerCords,
  setDestroyerCords,
  submarineCords,
  setSubmarineCords,
  cruiserCords,
  setCruiserCords,
  battleshipCords,
  setBattleshipCords,
  carrierCords,
  setCarrierCords,
  occupiedCords,
  setOccupiedCords,
  setPhase,
  gamemode,
}) {
  function handleRotate() {
    setIsHorizontal(!isHorizontal);
  }

  function handleReset() {
    setDestroyerCords([]);
    setCruiserCords([]);
    setSubmarineCords([]);
    setBattleshipCords([]);
    setCarrierCords([]);
    setOccupiedCords([]);
  }
  
  function handleDeploy() {
    if (gamemode === "single" && occupiedCords.length === 17) {
      setPhase("p1atk");
    } else if (gamemode === "versus") {
      setPhase("p2set");
    }
  }

  function handleSelection(e) {
    setSelectedShip(e.target.id);
  }
  // Creating Ships
  return (
    <div className="flex flex-col gap-10 p-5 items-center">
      <div className="flex gap-3">
        <button
          className={
            occupiedCords.length > 16 ? "hidden" : "border-2 cursor-pointer"
          }
          onClick={handleRotate}
        >
          Rotate Ships
        </button>
        <button className="border-2 cursor-pointer" onClick={handleReset}>
          Reset Ships
        </button>
        <button
          className="border-2 cursor-pointer bg-red-700"
          onClick={handleDeploy}
        >
          Deploy
        </button>
      </div>

      <div className="flex gap-5 items-center">
        <div
          className={
            selectedShip === "destroyer"
              ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse"
              : destroyerCords.length > 0
              ? "hidden"
              : "flex flex-col items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="destroyer"
        >
          <div
            id="destroyer"
            className={isHorizontal ? "flex flex-col -rotate-90" : ""}
          >
            <div id="destroyer" name="d1">
              <img
                className="w-8"
                src="/destroyer/d1.png"
                id="destroyer"
                onClick={handleSelection}
              />
            </div>
            <div id="destroyer" name="d2">
              <img
                className="w-8"
                src="/destroyer/d2.png"
                id="destroyer"
                onClick={handleSelection}
              />
            </div>
          </div>
          <p
            className="cursor-pointer p-5"
            onClick={handleSelection}
            id="destroyer"
          >
            Destroyer
          </p>
        </div>
        <div
          className={
            selectedShip === "submarine"
              ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse"
              : submarineCords.length > 0
              ? "hidden"
              : "flex flex-col items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="submarine"
        >
          <div
            id="submarine"
            className={isHorizontal ? "flex flex-col -rotate-90" : ""}
          >
            <div id="submarine" name="s1">
              <img
                className="w-7"
                src="/submarine/s1.png"
                id="submarine"
                onClick={handleSelection}
              />
            </div>
            <div id="submarine" name="s2">
              <img
                className="w-7"
                src="/submarine/s2.png"
                id="submarine"
                onClick={handleSelection}
              />
            </div>
            <div id="submarine" name="s3">
              <img
                className="w-7"
                src="/submarine/s3.png"
                id="submarine"
                onClick={handleSelection}
              />
            </div>
          </div>
          <p
            className="cursor-pointer p-5"
            onClick={handleSelection}
            id="submarine"
          >
            Submarine
          </p>
        </div>
        <div
          className={
            selectedShip === "cruiser"
              ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse"
              : cruiserCords.length > 0
              ? "hidden"
              : "flex flex-col items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="cruiser"
        >
          <div
            id="cruiser"
            className={isHorizontal ? "flex flex-col -rotate-90" : ""}
          >
            <div id="cruiser" name="cr1">
              <img
                className="w-7"
                src="/cruiser/cr1.png"
                id="cruiser"
                onClick={handleSelection}
              />
            </div>
            <div id="cruiser" name="cr2">
              <img
                className="w-7"
                src="/cruiser/cr2.png"
                id="cruiser"
                onClick={handleSelection}
              />
            </div>
            <div id="cruiser" name="cr3">
              <img
                className="w-7"
                src="/cruiser/cr3.png"
                id="cruiser"
                onClick={handleSelection}
              />
            </div>
          </div>
          <p
            className="cursor-pointer p-5"
            onClick={handleSelection}
            id="cruiser"
          >
            Cruiser
          </p>
        </div>
        <div
          className={
            selectedShip === "battleship"
              ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse"
              : battleshipCords.length > 0
              ? "hidden"
              : "flex flex-col items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="battleship"
        >
          <div
            id="battleship"
            className={isHorizontal ? "flex flex-col -rotate-90" : ""}
          >
            <div id="battleship" name="b1">
              <img
                className="w-7"
                src="/battleship/b1.png"
                id="battleship"
                onClick={handleSelection}
              />
            </div>
            <div id="battleship" name="b2">
              <img
                className="w-7"
                src="/battleship/b2.png"
                id="battleship"
                onClick={handleSelection}
              />
            </div>
            <div id="battleship" name="b3">
              <img
                className="w-7"
                src="/battleship/b3.png"
                id="battleship"
                onClick={handleSelection}
              />
            </div>
            <div id="battleship" name="b4">
              <img
                className="w-7"
                src="/battleship/b4.png"
                id="battleship"
                onClick={handleSelection}
              />
            </div>
          </div>
          <p
            className="cursor-pointer p-6"
            onClick={handleSelection}
            id="battleship"
          >
            Battleship
          </p>
        </div>
        <div
          className={
            selectedShip === "carrier"
              ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse"
              : carrierCords.length > 0
              ? "hidden"
              : "flex flex-col items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="carrier"
        >
          <div
            id="carrier"
            className={isHorizontal ? "flex flex-col -rotate-90" : ""}
          >
            <div id="carrier" name="ca1">
              <img
                className="w-7"
                src="/carrier/ca1.png"
                id="carrier"
                onClick={handleSelection}
              />
            </div>
            <div id="carrier" name="ca2">
              <img
                className="w-7"
                src="/carrier/ca2.png"
                id="carrier"
                onClick={handleSelection}
              />
            </div>
            <div id="carrier" name="ca3">
              <img
                className="w-7"
                src="/carrier/ca3.png"
                id="carrier"
                onClick={handleSelection}
              />
            </div>
            <div id="carrier" name="ca4">
              <img
                className="w-7"
                src="/carrier/ca4.png"
                id="carrier"
                onClick={handleSelection}
              />
            </div>
            <div id="carrier" name="ca5">
              <img
                className="w-7"
                src="/carrier/ca5.png"
                id="carrier"
                onClick={handleSelection}
              />
            </div>
          </div>
          <p
            className="cursor-pointer p-7"
            onClick={handleSelection}
            id="carrier"
          >
            Carrier
          </p>
        </div>
      </div>
    </div>
  );
}

export default P1Ships;
