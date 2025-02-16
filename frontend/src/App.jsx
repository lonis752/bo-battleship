import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BattlePage from "./pages/BattlePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BattlePage />} />
      </Routes>
    </>
  );
}

export default App;
