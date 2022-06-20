import { Component } from "react";
import YouTube from "react-youtube";
import withParams from "../HOC/withParams";
import CommentsForm from "./CommentsForm";

import "./ShowPage.scss";

class Showpage extends Component {
  render() {
    let id = this.props.params.id;

    return (
      <section className="showPage">
        <YouTube className="videoPlayer" videoId={id} />
        <hr className="break-line"></hr>
        <CommentsForm />
      </section>
    );
  }
}

export default withParams(Showpage);
