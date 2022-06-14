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
    </div>
  );
}

export default App;
