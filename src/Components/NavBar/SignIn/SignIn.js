import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

import axios from "axios";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isOpen: false,
      errors: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // const localURL = "http://localhost:9000/api/get/";

    const devURL = "https://ggb-youtube-clone-server.herokuapp.com/api";

    // get request \\
    await axios
      .get(`${devURL}/get`)
      .then((res) => {
        this.checkIfUserExists(res.data);
        this.setState({ isOpen: true });
      })
      .catch((err) => {
        this.setstate({ errors: err.response.data.message });
      });
    this.clearForm();
  };

  checkIfUserExists = (users) => {
    const { email, password } = this.state;

    const user = users.find((user) => {
      return email === user.email && password === user.password;
    });

    if (user) {
      this.props.displayCurrentUser(user);
    } else {
      this.setState({ errors: true });
    }
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      errors: null,
    });
  };

  render() {
    const { email, password, isOpen, errors } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Log In
          </Button>
        </Form>
        <Modal show={isOpen} onHide={this.closeModal}>
          {errors === "" || errors === true ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>FAILURE!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                You have entered invalid credentials. Please try again.
              </Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>SUCCESS!</Modal.Title>
              </Modal.Header>
              <Modal.Body>You have successfully logged in.</Modal.Body>
            </>
          )}
        </Modal>
      </div>
    );
  }
}

export default SignIn;
