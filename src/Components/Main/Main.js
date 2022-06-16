import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../NavBar/About";
import Search from "./Search";
import SearchResults from "./SearchResults";
import ShowPage from "../ShowPage/ShowPage";

import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      thumbnailsArr: [],
      isOpen: false,
      errors: null,
    };
  }

  getThumbnails = (results) => {
    let keyNum = 0;

    const videos = results.items.map((vids) => {
      const videoTitle = vids.snippet.title;

      if (vids.id.videoId) {
        return (
          <div key={keyNum++}>
            <Link to={`/videos/${vids.id.videoId}`}>
              <img
                className="videoThumbnail"
                src={vids.snippet.thumbnails.high.url}
                alt={vids.snippet.title}
              />
            </Link>
            <p>
              <strong className="thumbnailTitle">
                {this.convertTitle(videoTitle)}
              </strong>
            </p>
          </div>
        );
      }

      return null;
    });

    this.setState({
      thumbnailsArr: videos,
    });
  };

  convertTitle = (string) => {
    let converter = new DOMParser().parseFromString(string, "text/html");
    return converter.documentElement.textContent;
  };

  errors = (err) => {
    this.setState({
      errors: err,
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      searchBar: "",
    });
  };

  render() {
    const { thumbnailsArr, errors, isOpen } = this.state;
    let keyNum = 0;

    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={[
              <Search
                key={(keyNum += 1)}
                thumbnailsArr={thumbnailsArr}
                getThumbnails={this.getThumbnails}
                errors={this.errors}
              />,
              <SearchResults
                key={(keyNum += 2)}
                thumbnailsArr={thumbnailsArr}
                errors={errors}
                isOpen={isOpen}
                closeModal={this.closeModal}
              />,
            ]}
          />

          <Route path="/About" element={<About />} />
          <Route path="/videos/:id" element={<ShowPage />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
