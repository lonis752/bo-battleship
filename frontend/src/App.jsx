import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LobbyPage from "./pages/lobbyPage";
import BattlePage from "./pages/BattlePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </>
  );
}

export default App;
