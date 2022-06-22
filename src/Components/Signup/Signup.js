import { Component } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      errors: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password, email } = this.state;

    const user = {
      username: username,
      email: email,
      password: password,
    };

    // const localURL = "http://localhost:9000/api/";

    const devURL = "https://ggb-youtube-clone-server.herokuapp.com/api";

    // post request \\
    axios
      .post(`${devURL}/signup`, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // get request \\
    // axios
    //   .get(devURL)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>

          {this.state.errors && <p>{this.state.errors}</p>}
        </Form>
      </section>
    );
  }
}

export default Signup;
