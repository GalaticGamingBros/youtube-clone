import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./HandleNoRoutes.scss";

class HandleNoRoutes extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Modal
        className="handleNoRoutesModal"
        show={this.state.isOpen}
        onHide={this.closeModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ERROR CODE: 404</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How did you even get here? O_O <br />
          GET OUT BEFORE THE WEBSITE DEMON GETS YOU!!!
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Link to="/">
            <Button variant="danger" className="modalFooterButton">
              GET OUT!!!!
            </Button>
          </Link>
          <Link to="/">
            <Button variant="danger" className="modalFooterButton">
              GET OUT!!!!
            </Button>
          </Link>
          <Link to="/">
            <Button variant="danger" className="modalFooterButton">
              GET OUT!!!!
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HandleNoRoutes;
