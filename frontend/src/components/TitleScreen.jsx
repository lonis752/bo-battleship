import Footer from "./Footer";

function TitleScreen({ setPhase, setGamemode }) {
  function handleClick(e) {
    setPhase("rules");
    setGamemode("single"); // change to e.target.id when other features are ready
  }
  return (
    <>
      <div className="title flex items-center justify-center">
        <div className="h-[calc(100vh-2rem)] w-screen flex justify-center items-center">
          <div className="flex gap-5">
            <button
              onClick={handleClick}
              id="single"
              className="bg-indigo-700 hover:bg-indigo-800 text-pink-400 font-bold py-2 px-4 rounded max-h-10 mt-96"
            >
              Single Player
            </button>
            {/* <button
              onClick={handleClick}
              id="versus"
              className="bg-indigo-700 hover:bg-indigo-800 text-pink-400 font-bold py-2 px-4 rounded max-h-10 mt-60"
            >
              Versus
            </button>
            <button
              onClick={handleClick}
              id="multi"
              className="bg-indigo-700 hover:bg-indigo-800 text-pink-400 font-bold py-2 px-4 rounded max-h-10 mt-60"
            >
              Multiplayer
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TitleScreen;
