import { Component } from "react";
import "./App.scss";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  currentUserLoggedIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  loggedOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} loggedOut={this.loggedOut} />
        <Main
          isLoggedIn={isLoggedIn}
          currentUserLoggedIn={this.currentUserLoggedIn}
        />
      </div>
    );
  }
}

export default App;
