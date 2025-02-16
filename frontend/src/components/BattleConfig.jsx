function BattleConfig() {
  return (
    <div className="background">
      <div>
        <h1>Are you ready for battle?</h1>
        <p>
          Position your ships in strategic positions and go win us this battle!
        </p>
      </div>
      <div className="flex gap-5">
        <button className="border-2 cursor-pointer">Single Player</button>
        <button className="border-2 cursor-pointer">Versus</button>
        <button className="border-2 cursor-pointer">Multiplayer</button>
      </div>
    </div>
  );
}

export default BattleConfig;
