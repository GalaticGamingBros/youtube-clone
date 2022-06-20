import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class CommentsForm extends Component {
  state = {
    name: "",
    comment: "",
    commentsArray: [],
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let commentsArrayCopy = [...this.state.commentsArray];
    console.log("commnetsArrayCopy:", commentsArrayCopy);
    commentsArrayCopy.push({
      name: this.state.name,
      comment: this.state.comment,
    });

    this.setState({
      commentsArray: commentsArrayCopy,
    });
  };

  addComment = () => {
    const { commentsArray } = this.state;
    let keyComment = 0;
    const comments = commentsArray.map((comment) => {
      return (
        <li key={keyComment++}>
          {comment.name}
          <br></br>
          {comment.comment}
        </li>
      );
    });
    return comments;
  };

  render() {
    return (
      <div className="Form">
        <Form onSubmit={this.handleSubmit} className="CommentSection">
          <Form.Group controlId="formBasicName">
            <Form.Label className="NameLabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name..."
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Comment..."
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <ul>{this.addComment()}</ul>
        </Form>
      </div>
    );
  }
}
