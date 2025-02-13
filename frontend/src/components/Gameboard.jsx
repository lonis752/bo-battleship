import { useState } from "react";

function Gameboard({ isHorizontal, selectedShip, setSelectedShip }) {
  const [destroyerCords, setDestroyerCords] = useState([]);
  const [submarineCords, setSubmarineCords] = useState([]);
  const [cruiserCords, setCruiserCords] = useState([]);
  const [battleshipCords, setBattleshipCords] = useState([]);
  const [carrierCords, setCarrierCords] = useState([]);

  function placeShip(e) {
    // Get Destroyer Coordinates
    if (selectedShip === "destroyer") {
      if (isHorizontal) {
        if (e.target.id.includes("0")) {
          return alert("Can't place ship there");
        } else {
          setDestroyerCords([]);
          setDestroyerCords((s) => [
            ...s,
            parseInt(e.target.id),
            parseInt(e.target.id) + 1,
          ]);
        }
      } else if (!isHorizontal) {
        if (parseInt(e.target.id) > 90) {
          return alert("Can't place ship there");
        } else {
          setDestroyerCords([]);
          setDestroyerCords((s) => [
            ...s,
            parseInt(e.target.id),
            parseInt(e.target.id) + 10,
          ]);
        }
      }
      // Get Submarine Coordinates
    } else if (selectedShip === "submarine") {
      if (isHorizontal) {
        if (parseInt(e.target.id) % 10 == 9) {
          return alert("Can't place ship there");
        } else {
          setSubmarineCords([]);
          setSubmarineCords((s) => [
            ...s,
            parseInt(e.target.id),
            parseInt(e.target.id) + 1,
            parseInt(e.target.id) + 2,
          ]);
        }
      } else if (!isHorizontal) {
        if (parseInt(e.target.id) > 80) {
          return alert("Can't place ship there");
        } else {
          setSubmarineCords([]);
          setSubmarineCords((s) => [
            ...s,
            parseInt(e.target.id),
            parseInt(e.target.id) + 10,
            parseInt(e.target.id) + 20,
          ]);
        }
      }
    } else if (selectedShip === "cruiser") {
      if (isHorizontal) {
        if (parseInt(e.target.id) % 10 == 9) {
          return alert("Can't place ship there");
        } else {
          setCruiserCords([]);
          setCruiserCords((cr) => [
            ...cr,
            parseInt(e.target.id),
            parseInt(e.target.id) + 1,
            parseInt(e.target.id) + 2,
          ]);
        }
      } else if (!isHorizontal) {
        if (parseInt(e.target.id) > 80) {
          return alert("Can't place ship there");
        } else {
          setSubmarineCords([]);
          setSubmarineCords((cr) => [
            ...cr,
            parseInt(e.target.id),
            parseInt(e.target.id) + 10,
            parseInt(e.target.id) + 20,
          ]);
        }
      }
    } else if (selectedShip === "battleship") {
      if (isHorizontal) {
        setBattleshipCords([]);
        setBattleshipCords((b) => [
          ...b,
          parseInt(e.target.id),
          parseInt(e.target.id) + 1,
          parseInt(e.target.id) + 2,
          parseInt(e.target.id) + 3
        ]);
      } else {
        setBattleshipCords([]);
        setBattleshipCords((b) => [
          ...b,
          parseInt(e.target.id),
          parseInt(e.target.id) + 10,
          parseInt(e.target.id) + 20,
          parseInt(e.target.id) + 30
        ]);
      }
    } else if (selectedShip === "submarine") {
      if (isHorizontal) {
        setSubmarineCords([]);
        setSubmarineCords((s) => [
          ...s,
          parseInt(e.target.id),
          parseInt(e.target.id) + 1,
          parseInt(e.target.id) + 2,
        ]);
      } else {
        setSubmarineCords([]);
        setSubmarineCords((s) => [
          ...s,
          parseInt(e.target.id),
          parseInt(e.target.id) + 10,
          parseInt(e.target.id) + 20,
        ]);
      }
    } else if (selectedShip === "submarine") {
      if (isHorizontal) {
        setSubmarineCords([]);
        setSubmarineCords((s) => [
          ...s,
          parseInt(e.target.id),
          parseInt(e.target.id) + 1,
          parseInt(e.target.id) + 2,
        ]);
      } else {
        setSubmarineCords([]);
        setSubmarineCords((s) => [
          ...s,
          parseInt(e.target.id),
          parseInt(e.target.id) + 10,
          parseInt(e.target.id) + 20,
        ]);
      }
    }
    setSelectedShip("");
  }

  console.log(submarineCords);
  console.log(destroyerCords);

  const rows = [];
  for (let i = 1; i < 101; i++) {
    rows.push(
      <div
        className={
          destroyerCords.includes(i) || submarineCords.includes(i)
            ? "border-2 bg-gray-800 text-center"
            : "border-2 bg-gray-400 text-center"
        }
        onClick={placeShip}
        id={i}
        key={i}
      >
        {i}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-10 grid-rows-10 w-72 h-72">{rows}</div>
    </>
  );
}

export default Gameboard;
