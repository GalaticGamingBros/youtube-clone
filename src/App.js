import { Component } from "react";
import { Modal } from "react-bootstrap";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isOpen: false,
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
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { isLoggedIn, isOpen } = this.state;

    return (
      <div>
        <NavBar
          isLoggedIn={isLoggedIn}
          loggedOut={this.loggedOut}
          closeModal={this.closeModal}
        />
        <Main
          isLoggedIn={isLoggedIn}
          currentUserLoggedIn={this.currentUserLoggedIn}
        />
        <Modal show={isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>You have been successfully logged out.</Modal.Title>
          </Modal.Header>
          <Modal.Body>See you later.</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
