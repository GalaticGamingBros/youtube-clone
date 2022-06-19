import "./App.scss";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import CommentsForm from "./Components/ShowPage/CommentsForm";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <CommentsForm />
    </div>
  );
}

export default App;
