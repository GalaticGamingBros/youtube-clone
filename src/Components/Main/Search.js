import { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./Search.scss";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchBar: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=${this.state.searchBar}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
    )
      .then((res) => res.json())
      .then((results) => {
        this.props.getThumbnails(results);
      });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      searchBar: "",
    });
  };

  render() {
    const { searchBar } = this.state;

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
          <Button
            variant="danger"
            type="submit"
            className="btn"
            id="searchButton"
          >
            SEARCH
          </Button>
        </Form>
      </section>
    );
  }
}

export default Search;
