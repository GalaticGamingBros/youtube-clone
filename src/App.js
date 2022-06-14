import "./App.scss";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";

function App() {
  return (
    <div>
      <header>Youtube</header>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      {/* suggest footer to group */}
      <footer>Youtube Clone ©GalaticGamingBros</footer>
    </div>
  );
}

export default App;
