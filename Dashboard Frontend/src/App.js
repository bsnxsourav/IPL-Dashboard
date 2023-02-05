import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import MatchesPage from "./Pages/MatchesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/teams/:teamName" element={<TeamPage/>} />
        <Route path="/teams/:teamName/matches/:year" element={<MatchesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
