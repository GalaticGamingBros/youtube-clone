import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

import "./Search.scss";
import searchResults from "./SearchResults";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: "",
      searchResult: "",
      searched: false,
      isOpen: false,
      errors: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchBar: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchBar === "") {
      this.handleError();
    } else {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${this.state.searchBar}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
      )
        .then((res) => res.json())
        .then((results) => {
          this.props.getThumbnails(results);
        })
        .catch((err) => this.props.errors(err));
      this.setState({
        searchResult: this.state.searchBar,
        searched: true,
      });
      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({
      searchBar: "",
    });
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
    const { searchBar, searchResult, searched, errors, isOpen } = this.state;

    return (
      <section className="main-search">
        <Form onSubmit={this.handleSubmit} id="searchForm">
          <Form.Group className="mb-3" controlId="searchBar">
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchBar}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="danger" type="submit" id="searchButton">
            SEARCH
          </Button>
        </Form>
        {errors ? (
          <Modal show={isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>ERROR CODE: 400</Modal.Title>
            </Modal.Header>
            <Modal.Body>You cannot submit an empty search!</Modal.Body>
          </Modal>
        ) : null}
        {searched ? <p>Previously Searched: {searchResult}</p> : null}
      </section>
    );
  }
}

export default Search;
