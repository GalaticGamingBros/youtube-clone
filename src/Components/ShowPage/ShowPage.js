import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import withParams from "../HOC/withParams";
import CommentsForm from "./CommentsForm";
import axios from "axios";

import "./ShowPage.scss";

class Showpage extends Component {
  constructor() {
    super();
    this.state = {
      videoFound: false,
      isOpen: false,
      errors: null,
    };
  }

  componentDidMount() {
    let id = this.props.params.id;

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
      )
      .then((res) => {
        if (res.data.items.length === 0) {
          this.setState({
            videoFound: false,
            isOpen: true,
          });
        } else {
          this.setState({
            videoFound: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          errors: err,
        });
      });
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    let id = this.props.params.id;

    const { videoFound, isOpen } = this.state;

    return (
      <section className="showPage">
        {videoFound ? (
          <>
            <YouTube className="videoPlayer" videoId={id} />
            <hr className="break-line"></hr>
            <CommentsForm
              isLoggedIn={this.props.isLoggedIn}
              currentUser={this.props.currentUser}
            />
          </>
        ) : (
          <Modal show={isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Error code: 404</Modal.Title>
            </Modal.Header>
            <Modal.Body>VIDEO NOT FOUND!</Modal.Body>
            <Modal.Footer>
              <Link to="/">
                <Button variant="dark">Back To Home</Button>
              </Link>
            </Modal.Footer>
          </Modal>
        )}
      </section>
    );
  }
}

export default withParams(Showpage);
