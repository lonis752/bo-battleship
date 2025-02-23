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
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-3">
        <button
          className={
            occupiedCords.length > 16
              ? "hidden"
              : "border-2 cursor-pointer p-2 rounded-4xl bg-blue-300 border-blue-400"
          }
          onClick={handleRotate}
        >
          <strong>↻</strong> Rotate
        </button>
        <button
          className="border-2 cursor-pointer p-2 rounded-4xl bg-orange-300 border-orange-400"
          onClick={handleReset}
        >
          <strong>⇏</strong> Reset
        </button>
        <button
          className="border-2 cursor-pointer bg-red-700 p-2 text-white border-red-500 rounded-4xl"
          onClick={handleDeploy}
        >
          Deploy <strong>▶</strong>
        </button>
      </div>

      <div 
          className={
            isHorizontal ? "flex gap-20" : "flex gap-15 items-center"
          }>
        <div
          className={
            isHorizontal ? "flex flex-col" : "flex gap-15 items-center"
          }
        >
          <div
            className={
              selectedShip === "destroyer"
                ? "flex flex-col items-center cursor-pointer animate-pulse w-5 sm:w-10"
                : destroyerCords.length > 0
                ? "hidden"
                : "flex flex-col items-center gap-3 cursor-pointer w-5 sm:w-10"
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
                  src="d1.png"
                  id="destroyer"
                  onClick={handleSelection}
                />
              </div>
              <div id="destroyer" name="d2">
                <img
                  className="w-8"
                  src="d2.png"
                  id="destroyer"
                  onClick={handleSelection}
                />
              </div>
            </div>
            <p
              className="cursor-pointer hidden sm:block sm:p-5"
              onClick={handleSelection}
              id="destroyer"
            >
              Destroyer
            </p>
          </div>
          <div
            className={
              selectedShip === "submarine"
                ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse w-5 sm:w-10"
                : submarineCords.length > 0
                ? "hidden"
                : "flex flex-col items-center gap-3 cursor-pointer w-5 sm:w-10"
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
                  src="s1.png"
                  id="submarine"
                  onClick={handleSelection}
                />
              </div>
              <div id="submarine" name="s2">
                <img
                  className="w-7"
                  src="s2.png"
                  id="submarine"
                  onClick={handleSelection}
                />
              </div>
              <div id="submarine" name="s3">
                <img
                  className="w-7"
                  src="s3.png"
                  id="submarine"
                  onClick={handleSelection}
                />
              </div>
            </div>
            <p
              className="cursor-pointer hidden sm:block sm:p-5"
              onClick={handleSelection}
              id="submarine"
            >
              Submarine
            </p>
          </div>
          <div
            className={
              selectedShip === "cruiser"
                ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse w-5 sm:w-10"
                : cruiserCords.length > 0
                ? "hidden"
                : "flex flex-col items-center gap-3 cursor-pointer w-5 sm:w-10"
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
                  src="cr1.png"
                  id="cruiser"
                  onClick={handleSelection}
                />
              </div>
              <div id="cruiser" name="cr2">
                <img
                  className="w-7"
                  src="cr2.png"
                  id="cruiser"
                  onClick={handleSelection}
                />
              </div>
              <div id="cruiser" name="cr3">
                <img
                  className="w-7"
                  src="cr3.png"
                  id="cruiser"
                  onClick={handleSelection}
                />
              </div>
            </div>
            <p
              className="cursor-pointer hidden sm:block sm:p-5"
              onClick={handleSelection}
              id="cruiser"
            >
              Cruiser
            </p>
          </div>
        </div>
        <div
          className={
            isHorizontal ? "flex flex-col" : "flex gap-15 items-center"
          }>
          <div
            className={
              selectedShip === "battleship"
                ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse w-5 sm:w-10"
                : battleshipCords.length > 0
                ? "hidden"
                : "flex flex-col items-center gap-3 cursor-pointer w-5 sm:w-10"
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
                  src="b1.png"
                  id="battleship"
                  onClick={handleSelection}
                />
              </div>
              <div id="battleship" name="b2">
                <img
                  className="w-7"
                  src="b2.png"
                  id="battleship"
                  onClick={handleSelection}
                />
              </div>
              <div id="battleship" name="b3">
                <img
                  className="w-7"
                  src="b3.png"
                  id="battleship"
                  onClick={handleSelection}
                />
              </div>
              <div id="battleship" name="b4">
                <img
                  className="w-7"
                  src="b4.png"
                  id="battleship"
                  onClick={handleSelection}
                />
              </div>
            </div>
            <p
              className="cursor-pointer hidden sm:block sm:p-6"
              onClick={handleSelection}
              id="battleship"
            >
              Battleship
            </p>
          </div>
          <div
            className={
              selectedShip === "carrier"
                ? "flex flex-col items-center gap-3 cursor-pointer animate-pulse w-5 sm:w-10"
                : carrierCords.length > 0
                ? "hidden"
                : "flex flex-col items-center gap-3 cursor-pointer w-5 sm:w-10"
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
                  src="ca1.png"
                  id="carrier"
                  onClick={handleSelection}
                />
              </div>
              <div id="carrier" name="ca2">
                <img
                  className="w-7"
                  src="ca2.png"
                  id="carrier"
                  onClick={handleSelection}
                />
              </div>
              <div id="carrier" name="ca3">
                <img
                  className="w-7"
                  src="ca3.png"
                  id="carrier"
                  onClick={handleSelection}
                />
              </div>
              <div id="carrier" name="ca4">
                <img
                  className="w-7"
                  src="ca4.png"
                  id="carrier"
                  onClick={handleSelection}
                />
              </div>
              <div id="carrier" name="ca5">
                <img
                  className="w-7"
                  src="ca5.png"
                  id="carrier"
                  onClick={handleSelection}
                />
              </div>
            </div>
            <p
              className="cursor-pointer hidden sm:block sm:p-7"
              onClick={handleSelection}
              id="carrier"
            >
              Carrier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P1Ships;
