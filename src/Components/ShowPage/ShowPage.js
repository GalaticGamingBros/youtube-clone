import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import withParams from "../HOC/withParams";

import "./ShowPage.scss";

class Showpage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      comment: "",
    };
  }

  render() {
    const { name, comment } = this.state;

    let id = this.props.params.id;
    console.log(id);

    return (
      <section className="showPage">
        <YouTube className="videoPlayer" videoId={id} />
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Comment..."
              value={comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    );
  }
}

export default withParams(Showpage);
