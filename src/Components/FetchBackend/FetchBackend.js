import { Component } from "react";

class FetchBackend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
  }

  callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((resu) => {
        console.log("worked");
        this.setState({ apiResponse: resu.message });
      });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.callAPI()}>click me to call API</button>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default FetchBackend;
