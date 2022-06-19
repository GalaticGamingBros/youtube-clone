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

  handleSubmit = () => {
    let commentsArrayCopy = [...this.state.commentsArray];
    console.log(commentsArrayCopy);
    const { commentsArray } = this.state;
    commentsArrayCopy.push({
      name: this.state.name,
      comment: this.state.comment,
    });
    this.setState({
      commentsArray: commentsArrayCopy,
    });
    console.log("commentsArray:", commentsArray);
    let commentArrayUpdated = commentsArray.map((comment) => {
      console.log("map comment:", comment);
    });
    // for (let comment of commentsArrayCopy) {
    //   console.log("comment:", comment);
    //   <li>{comment}</li>;
    // }
    // this.setState({
    //   commentsArray: commentArrayUpdated,
    // });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <div>
          {/* <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            /> */}
          <Form></Form>
          <label>Name</label>
          <div>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Name..."
            ></input>
          </div>
          <div>
            <label>Comment</label>
          </div>
          <div>
            <input
              value={this.state.comment}
              onChange={this.handleCommentChange}
              placeholder="..."
            ></input>
          </div>
        </div>
        <br></br>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <ul>{this.state.commentsArray}</ul>
      </div>
    );
  }
}
