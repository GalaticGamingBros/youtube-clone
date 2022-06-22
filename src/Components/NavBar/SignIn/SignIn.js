import { Component } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
      this.setState({ errors: "Invalid Credentials" });
      setTimeout(() => {
        this.setState({ errors: null });
      }, 3000);
    }
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <br />
          {this.state.errors ? <p>{this.state.errors}</p> : null}
          <Button variant="dark" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
