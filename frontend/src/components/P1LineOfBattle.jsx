function P1LineOfBattle({
  isHorizontal,
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
  cpuHitCords=[],
  setCpuHitCords,
  cpuMissCords=[],
  setCpuMissCords,
  phase,
  setPhase,
}) {
  const ships = {
    destroyer: { size: 2, setCoords: setDestroyerCords, image: "/destroyer/d" },
    submarine: { size: 3, setCoords: setSubmarineCords, image: "/submarine/s" },
    cruiser: { size: 3, setCoords: setCruiserCords, image: "/cruiser/cr" },
    battleship: {
      size: 4,
      setCoords: setBattleshipCords,
      image: "/battleship/b",
    },
    carrier: { size: 5, setCoords: setCarrierCords, image: "/carrier/ca" },
  };

  function isPlacementValid(start, size, isHorizontal) {
    const shipPositions = Array.from({ length: size }, (_, i) =>
      isHorizontal ? start + i : start + i * 10
    );
    return (
      !shipPositions.some((pos) => occupiedCords.includes(pos)) &&
      !(isHorizontal && (start % 10) + size > 10) &&
      !(start + (size - 1) * (isHorizontal ? 1 : 10) > 99)
    );
  }

  function placeShip(e) {
    if (!selectedShip) return;
    const id = parseInt(e.target.id);
    const ship = ships[selectedShip];
    if (!ship || !isPlacementValid(id, ship.size, isHorizontal)) {
      return alert("Can't place ship there");
    }

    const newCoords = Array.from({ length: ship.size }, (_, i) =>
      isHorizontal ? id + i : id + i * 10
    );
    setOccupiedCords((prev) => [...prev, ...newCoords]);
    ship.setCoords((prev) => [
      ...prev,
      ...newCoords,
      isHorizontal ? "horizontal" : "vertical",
    ]);
    setSelectedShip("");
  }

  function renderCell(i) {
    const allCords = {
      destroyerCords,
      submarineCords,
      cruiserCords,
      battleshipCords,
      carrierCords,
    };
    for (const [ship, { image }] of Object.entries(ships)) {
      const coords = allCords[`${ship}Cords`];
      const index = coords.indexOf(i);
      if (index !== -1 && !cpuHitCords.includes(i)) {
        return (
          <img
            className={
              coords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src={`${image}${index + 1}.png`}
            alt={ship}
          />
        );
      }
    }
    return i;
  }

  return (
    <div className="pt-20">
      <div className="grid grid-cols-10 grid-rows-10 w-96 h-96">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            id={i}
            className={
              occupiedCords.includes(i)
                ? "bg-gray-900 text-center" :
                cpuMissCords.includes(i) ? "bg-red-300 text-center" : cpuHitCords.includes(i) ? "bg-red-600 text-center" : "border-2 bg-gray-400 text-center"
            }
            onClick={!occupiedCords.includes(i) ? placeShip : undefined}
          >
            {renderCell(i)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default P1LineOfBattle;
