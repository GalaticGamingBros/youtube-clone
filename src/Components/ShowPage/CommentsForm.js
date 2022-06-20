import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default class CommentsForm extends Component {
  state = {
    name: "",
    comment: "",
    commentsArray: [],
    isOpen: false,
    errors: null,
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
    if (this.state.name === "" || this.state.comment === "") {
      this.handleError();
    } else {
      commentsArrayCopy.push({
        name: this.state.name,
        comment: this.state.comment,
      });

      this.setState({
        commentsArray: commentsArrayCopy,
      });
    }
  };

  addComment = () => {
    const { commentsArray } = this.state;
    let keyComment = 0;
    const comments = commentsArray.map((comment) => {
      return (
        <li key={keyComment++}>
          <strong>{comment.name}</strong>
          <br></br>
          {comment.comment}
        </li>
      );
    });
    return comments;
  };

  handleError = () => {
    this.setState({
      isOpen: true,
      errors: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      errors: null,
    });
  };

  render() {
    const { errors, isOpen } = this.state;
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
              type="text"
              placeholder="Comment..."
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <hr></hr>
          <ul>{this.addComment()}</ul>
        </Form>
        {errors ? (
          <Modal show={isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Comment did not upload</Modal.Title>
            </Modal.Header>
            <Modal.Body>You cannot submit an empty name or comment!</Modal.Body>
          </Modal>
        ) : null}
      </div>
    );
  }
}
