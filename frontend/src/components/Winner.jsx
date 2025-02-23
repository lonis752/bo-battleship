import Footer from "./Footer";

function Winner({
  winner,
  setWinner,
  setGamemode,
  setPhase,
  setDestroyerCords,
  setSubmarineCords,
  setCruiserCords,
  setBattleshipCords,
  setCarrierCords,
  setOccupiedCords,
  setCpuHitCords,
  setCpuMissCords,
}) {
  function handleClick() {
    setWinner("");
    setGamemode("");
    setPhase("gameStart");
    setDestroyerCords([]);
    setSubmarineCords([]);
    setCruiserCords([]);
    setBattleshipCords([]);
    setCarrierCords([]);
    setOccupiedCords([]);
    setCpuHitCords([]);
    setCpuMissCords([]);
    window.location.reload()
  }
  return (
    <>
      <div className="winner flex items-center justify-center -mt-10">
        <div className="h-[calc(100vh-12rem)] w-screen flex flex-col items-center justify-center pb-5 gap-5">
          <div className="font-bold text-5xl p-5 flex flex-col gap-10 bg-white/50 rounded-2xl items-center">
            <p className="text-md font-normal">Winner: {winner}</p>
            <p>You Defeated The Computer!</p>
            <p>A spectacular display of navel combat.</p>
            <p className="text-md font-normal">
              But we need you at command again.
            </p>
            <button
              onClick={handleClick}
              className="border-2 animate-pulse cursor-pointer p-6 bg-red-700 text-white border-red-500 rounded-4xl"
            >
              Re-deploy <strong>↻</strong>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Winner;
