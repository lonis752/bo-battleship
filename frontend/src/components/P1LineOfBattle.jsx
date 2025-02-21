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
}) {
  function placeShip(e) {
    const id = parseInt(e.target.id);
    // Get Destroyer Coordinates
    if (selectedShip === "destroyer") {
      if (isHorizontal) {
        if (id % 10 == 0) {
          return alert("Can't place ship there");
        } else if (!occupiedCords.includes(id + 1)) {
          setOccupiedCords((o) => [...o, id, id + 1]);
          setDestroyerCords((s) => [...s, id, id + 1, "horizontal"]);
        } else {
          return alert("Ship is already taking the spot");
        }
      } else if (!isHorizontal) {
        if (id > 90) {
          return alert("Can't place ship there");
        } else if (!occupiedCords.includes(id + 10)) {
          setOccupiedCords((o) => [...o, id, id + 10]);
          setDestroyerCords((s) => [...s, id, id + 10]);
        } else {
          return alert("Ship is already taking the spot");
        }
      }
    } // Get Submarine Coordinates
    else if (selectedShip === "submarine") {
      if (isHorizontal) {
        if (id % 10 == 9 || id % 10 == 0) {
          return alert("Can't place ship there");
        } else if (
          ![id + 1, id + 2].some((cords) => occupiedCords.includes(cords))
        ) {
          setOccupiedCords((o) => [...o, id, id + 1, id + 2]);
          setSubmarineCords((s) => [...s, id, id + 1, id + 2, "horizontal"]);
        } else {
          return alert("Ship is already taking the spot");
        }
      } else if (!isHorizontal) {
        if (id > 80) {
          return alert("Can't place ship there");
        } else if (
          ![id + 10, id + 20].some((cords) => occupiedCords.includes(cords))
        ) {
          setOccupiedCords((o) => [...o, id, id + 10, id + 20]);
          setSubmarineCords((s) => [...s, id, id + 10, id + 20]);
        } else {
          return alert("Ship is already taking the spot");
        }
      }
    } // Get Cruiser Coordinates
    else if (selectedShip === "cruiser") {
      if (isHorizontal) {
        if (id % 10 == 9 || id % 10 == 0) {
          return alert("Can't place ship there");
        } else if (
          ![id + 1, id + 2].some((cords) => occupiedCords.includes(cords))
        ) {
          setOccupiedCords((o) => [...o, id, id + 1, id + 2]);
          setCruiserCords((cr) => [...cr, id, id + 1, id + 2, "horizontal"]);
        } else {
          return alert("Ship is already taking the spot");
        }
      } else if (!isHorizontal) {
        if (id > 80) {
          return alert("Can't place ship there");
        } else if (
          ![id + 10, id + 20].some((cords) => occupiedCords.includes(cords))
        ) {
          setOccupiedCords((o) => [...o, id, id + 10, id + 20]);
          setCruiserCords((cr) => [...cr, id, id + 10, id + 20]);
        } else {
          return alert("Ship is already taking the spot");
        }
      }
    } // Get Battleship Coordinates
    else if (selectedShip === "battleship") {
      if (isHorizontal) {
        if (id % 10 == 8 || id % 10 == 9 || id % 10 == 0) {
          return alert("Can't place ship there");
        } else if (
          ![id + 1, id + 2, id + 3].some((cords) =>
            occupiedCords.includes(cords)
          )
        ) {
          setOccupiedCords((o) => [...o, id, id + 1, id + 2, id + 3]);
          setBattleshipCords((b) => [
            ...b,
            id,
            id + 1,
            id + 2,
            id + 3,
            "horizontal",
          ]);
        } else {
          return alert("Ship is already taking the spot");
        }
      } else if (!isHorizontal) {
        if (id > 70) {
          return alert("Can't place ship there");
        } else if (
          ![id + 10, id + 20, id + 30].some((cords) =>
            occupiedCords.includes(cords)
          )
        ) {
          setOccupiedCords((o) => [...o, id, id + 10, id + 20, id + 30]);
          setBattleshipCords((b) => [...b, id, id + 10, id + 20, id + 30]);
        } else {
          return alert("Ship is already taking the spot");
        }
      }
    } // Get Carrier Coordinates
    else if (selectedShip === "carrier") {
      if (isHorizontal) {
        if (id % 10 == 7 || id % 10 == 8 || id % 10 == 9 || id % 10 == 0) {
          return alert("Can't place ship there");
        } else if (
          ![id + 1, id + 2, id + 3, id + 4].some((cords) =>
            occupiedCords.includes(cords)
          )
        ) {
          setOccupiedCords((o) => [...o, id, id + 1, id + 2, id + 3, id + 4]);
          setCarrierCords((s) => [
            ...s,
            id,
            id + 1,
            id + 2,
            id + 3,
            id + 4,
            "horizontal",
          ]);
        } else {
          return alert("Ship is already taking the spot");
        }
      } else if (!isHorizontal) {
        if (id > 60) {
          return alert("Can't place ship there");
        } else if (
          ![id + 10, id + 20, id + 30, id + 40].some((cords) =>
            occupiedCords.includes(cords)
          )
        ) {
          setOccupiedCords((o) => [
            ...o,
            id,
            id + 10,
            id + 20,
            id + 30,
            id + 40,
          ]);
          setCarrierCords((s) => [
            ...s,
            id,
            id + 10,
            id + 20,
            id + 30,
            id + 40,
          ]);
        } else {
          return alert("Ship is already taking the spot");
        }
      }
    }
    setSelectedShip("");
  }

  console.log(occupiedCords);
  console.log(destroyerCords);

  const rows = [];
  for (let i = 1; i < 101; i++) {
    rows.push(
      <div
        className={
          destroyerCords.includes(i) ||
          submarineCords.includes(i) ||
          cruiserCords.includes(i) ||
          battleshipCords.includes(i) ||
          carrierCords.includes(i)
            ? "bg-gray-800 text-center"
            : "border-2 bg-gray-400 text-center"
        }
        onClick={
          destroyerCords.includes(i) ||
          submarineCords.includes(i) ||
          cruiserCords.includes(i) ||
          battleshipCords.includes(i) ||
          carrierCords.includes(i)
            ? undefined
            : placeShip
        }
        id={i}
        key={i}
      >
        {destroyerCords[0] === i ? (
          <img
            className={
              destroyerCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/destroyer/d1.png"
          />
        ) : destroyerCords[1] === i ? (
          <img
            className={
              destroyerCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/destroyer/d2.png"
          />
        ) : submarineCords[0] === i ? (
          <img
            className={
              submarineCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/submarine/s1.png"
          />
        ) : submarineCords[1] === i ? (
          <img
            className={
              submarineCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/submarine/s2.png"
          />
        ) : submarineCords[2] === i ? (
          <img
            className={
              submarineCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/submarine/s3.png"
          />
        ) : cruiserCords[0] === i ? (
          <img
            className={
              cruiserCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/cruiser/cr1.png"
          />
        ) : cruiserCords[1] === i ? (
          <img
            className={
              cruiserCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/cruiser/cr2.png"
          />
        ) : cruiserCords[2] === i ? (
          <img
            className={
              cruiserCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/cruiser/cr3.png"
          />
        ) : battleshipCords[0] === i ? (
          <img
            className={
              battleshipCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/battleship/b1.png"
          />
        ) : battleshipCords[1] === i ? (
          <img
            className={
              battleshipCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/battleship/b2.png"
          />
        ) : battleshipCords[2] === i ? (
          <img
            className={
              battleshipCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/battleship/b3.png"
          />
        ) : battleshipCords[3] === i ? (
          <img
            className={
              battleshipCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/battleship/b4.png"
          />
        ) : carrierCords[0] === i ? (
          <img
            className={
              carrierCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/carrier/ca1.png"
          />
        ) : carrierCords[1] === i ? (
          <img
            className={
              carrierCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/carrier/ca2.png"
          />
        ) : carrierCords[2] === i ? (
          <img
            className={
              carrierCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/carrier/ca3.png"
          />
        ) : carrierCords[3] === i ? (
          <img
            className={
              carrierCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/carrier/ca4.png"
          />
        ) : carrierCords[4] === i ? (
          <img
            className={
              carrierCords.includes("horizontal")
                ? "-rotate-90 w-full h-full object-cover"
                : "w-full h-full object-cover"
            }
            src="/carrier/ca5.png"
          />
        ) : (
          i
        )}
      </div>
    );
  }

  return (
    <div className="pt-55">
      <div className="grid grid-cols-10 grid-rows-10 w-96 h-96">{rows}</div>
    </div>
  );
}

export default P1LineOfBattle;
