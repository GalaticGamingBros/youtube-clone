import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import SearchResults from "./SearchResults";

import "./Search.scss";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: "",
      resultsArr: [],
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
        this.getVideos(results);
        this.renderSearchResults(results);
      });

    this.clearForm();
  };

  getVideos = (results) => {
    const videos = results.items.map((vids) => {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?maxResults=10&key=${process.env.REACT_APP_API_KEY}&part=id`
      )
        .then((res) => res.json())
        .then((videos) => {
          console.log(videos);
        });
    });
  };

  renderSearchResults = (results) => {
    const videoArr = [];

    let keyNum = 0;

    const videos = results.items.map((vids) => {
      // console.log(vids.snippet.thumbnails.high);
      const convertTitle = vids.snippet.title;

      // console.log(vids.id.videoId);

      return (
        <div key={keyNum++}>
          <img
            className="videoThumbnail"
            src={vids.snippet.thumbnails.high.url}
            alt={vids.snippet.title}
          />
          <p>
            <strong>{convertTitle}</strong>
          </p>
        </div>
      );
    });

    this.setState({
      resultsArr: videos,
    });

    // resultsArrCopy.push(results.items);
  };

  clearForm = () => {
    this.setState({
      searchBar: "",
    });
  };

  render() {
    const { searchBar, resultsArr } = this.state;

    return (
      <section className="main-search">
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="searchBar">
              <Form.Control
                type="text"
                placeholder="Type something"
                value={searchBar}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              SEARCH
            </Button>
          </Form>
          <SearchResults resultsArr={resultsArr} />
        </div>
      </section>
    );
  }
}

export default Search;
