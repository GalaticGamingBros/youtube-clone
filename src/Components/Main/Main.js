import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../NavBar/About";
import Search from "./Search";
import SearchResults from "./SearchResults";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      thumbnailsArr: [],
    };
  }

  getThumbnails = (results) => {
    let keyNum = 0;
    const videosArr = [];

    const videos = results.items.map((vids) => {
      const convertTitle = vids.snippet.title;

      if (vids.id.videoId) {
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
      }

      return videosArr;
    });

    this.setState({
      thumbnailsArr: videos,
    });
  };

  render() {
    const { thumbnailsArr } = this.state;
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
              />,
              <SearchResults
                key={(keyNum += 2)}
                thumbnailsArr={thumbnailsArr}
              />,
            ]}
          />

          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
