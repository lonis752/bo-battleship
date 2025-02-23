function Rules({ setPhase }) {
  function handleClick() {
    setPhase("p1set");
  }
  return (
    <div className="bg-[url('rules.jpeg')] h-100% bg-center bg-no-repeat bg-cover">
      <div className="h-[calc(100vh-6rem)] w-screen flex justify-center items-center">
        <div className="flex flex-col gap-5 bg-white/85 p-20 text-center rounded-2xl items-center text-indigo-700">
          <h1 className="font-bold text-3xl">Rules</h1>
          <ul>
            <p className="font-bold text-xl">Gamemodes:</p>
            <li>
              <strong>Single Player</strong> - playing against computer
            </li>
            <li>
              <strong>Versus Play</strong> - playing against another player on
              the same computer
            </li>
            <li>
              <strong>Multi Player</strong> - playing against another player
              online
            </li>
          </ul>
          <p>Place your ships and deploy your ships to start the battle.</p>
          <p>
            Take turns firing at opponents board until someone sinks all the
            opposing ships.
          </p>
          <p>Battle with truth and don't peak at the others board!</p>
          <p>Are You Ready for Battle?</p>
          <button
            onClick={handleClick}
            id="multi"
            className="bg-indigo-700 hover:bg-indigo-800 text-pink-400 font-bold py-2 px-4 rounded max-h-10 max-w-40"
          >
            READY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
