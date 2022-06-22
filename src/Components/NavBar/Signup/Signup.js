import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
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

    const { username, password, email } = this.state;

    const user = {
      username: username,
      email: email,
      password: password,
    };

    // const localURL = "http://localhost:9000/api/signup";

    const devURL = "https://ggb-youtube-clone-server.herokuapp.com/api";

    // post request \\
    await axios
      .post(`${devURL}/signup`, user)
      .then((res) => {
        this.props.displayCurrentUser(res.data);
        this.setState({ isOpen: true });
      })
      .catch((err) => {
        this.setstate({ errors: err.response.data.message });
      });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      errors: null,
    });
  };

  render() {
    const { username, password, email, isOpen, errors } = this.state;
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <Modal show={isOpen} onHide={this.closeModal}>
          {errors ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Account Creation Failed!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Your account has failed to be created, You probably used an
                existing email.
              </Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Account Successfully Created!</Modal.Title>
              </Modal.Header>
              <Modal.Body>You have been automatically logged in.</Modal.Body>
            </>
          )}
        </Modal>
      </section>
    );
  }
}

export default Signup;
