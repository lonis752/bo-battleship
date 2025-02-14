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
}) {
  function handleRotate() {
    setIsHorizontal(!isHorizontal);
  }

  function handleSelection(e) {
    setSelectedShip(e.target.id);
  }
  // Creating Ships
  return (
    <div className="flex flex-col gap-10">
      <button className="border-2 cursor-pointer" onClick={handleRotate}>
        Rotate Ships
      </button>
      <div className="flex flex-col gap-5">
        <div
          className={
            selectedShip === "destroyer"
              ? "flex items-center gap-3 cursor-pointer animate-pulse"
              : destroyerCords.length > 0
              ? "hidden"
              : "flex items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="destroyer"
        >
          <div
            id="destroyer"
            className={isHorizontal ? "border-2 flex" : "border-2"}
          >
            <div id="destroyer" name="d1" className="p-1">
              1
            </div>
            <div id="destroyer" name="d2" className="p-1">
              2
            </div>
          </div>
          <p
            className="cursor-pointer"
            onClick={handleSelection}
            id="destroyer"
          >
            Destroyer
          </p>
        </div>
        <div
          className={
            selectedShip === "submarine"
              ? "flex items-center gap-3 cursor-pointer animate-pulse"
              : submarineCords.length > 0
              ? "hidden"
              : "flex items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="submarine"
        >
          <div
            id="submarine"
            className={isHorizontal ? "border-2 flex" : "border-2"}
          >
            <div id="submarine" name="s1" className="p-1">
              1
            </div>
            <div id="submarine" name="s2" className="p-1">
              2
            </div>
            <div id="submarine" name="s3" className="p-1">
              3
            </div>
          </div>
          <p
            className="cursor-pointer"
            onClick={handleSelection}
            id="submarine"
          >
            Submarine
          </p>
        </div>
        <div
          className={
            selectedShip === "cruiser"
              ? "flex items-center gap-3 cursor-pointer animate-pulse"
              : cruiserCords.length > 0
              ? "hidden"
              : "flex items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="cruiser"
        >
          <div
            id="cruiser"
            className={isHorizontal ? "border-2 flex" : "border-2"}
          >
            <div id="cruiser" name="cr1" className="p-1">
              1
            </div>
            <div id="cruiser" name="cr2" className="p-1">
              2
            </div>
            <div id="cruiser" name="cr3" className="p-1">
              3
            </div>
          </div>
          <p
            className="cursor-pointer"
            onClick={handleSelection}
            id="cruiser"
          >
            Cruiser
          </p>
        </div>
        <div
          className={
            selectedShip === "battleship"
              ? "flex items-center gap-3 cursor-pointer animate-pulse"
              : battleshipCords.length > 0
              ? "hidden"
              : "flex items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="battleship"
        >
          <div
            id="battleship"
            className={isHorizontal ? "border-2 flex" : "border-2"}
          >
            <div id="battleship" name="b1" className="p-1">
              1
            </div>
            <div id="battleship" name="b2" className="p-1">
              2
            </div>
            <div id="battleship" name="b3" className="p-1">
              3
            </div>
            <div id="battleship" name="b4" className="p-1">
              4
            </div>
          </div>
          <p
            className="cursor-pointer"
            onClick={handleSelection}
            id="battleship"
          >
            Battleship
          </p>
        </div>
        <div
          className={
            selectedShip === "carrier"
              ? "flex items-center gap-3 cursor-pointer animate-pulse"
              : carrierCords.length > 0
              ? "hidden"
              : "flex items-center gap-3 cursor-pointer"
          }
          onClick={handleSelection}
          id="carrier"
        >
          <div
            id="carrier"
            className={isHorizontal ? "border-2 flex" : "border-2"}
          >
            <div id="carrier" name="ca1" className="p-1">
              1
            </div>
            <div id="carrier" name="ca2" className="p-1">
              2
            </div>
            <div id="carrier" name="ca3" className="p-1">
              3
            </div>
            <div id="carrier" name="ca4" className="p-1">
              4
            </div>
            <div id="carrier" name="ca5" className="p-1">
              5
            </div>
          </div>
          <p
            className="cursor-pointer"
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
