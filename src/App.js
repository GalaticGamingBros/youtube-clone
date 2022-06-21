import "./App.scss";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import FetchBackend from "./Components/FetchBackend/FetchBackend";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <FetchBackend />
    </div>
  );
}

export default App;
