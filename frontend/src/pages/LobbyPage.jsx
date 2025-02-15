function LobbyPage() {
  return (
    <div className="background">
    <div>
        <h1>Are you ready for battle?</h1>
        <p>Position your ships in strategic positions and go win us this battle!</p>
    </div>
    <div className="flex">
        <button>Single Player</button>
        <button>Versus</button>
        <button>Multiplayer</button>
    </div>
    </div>
  )
}

export default LobbyPage