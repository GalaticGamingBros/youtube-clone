import axios from "axios";
import { Component } from "react";

class FetchBackend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
  }

  callAPI = () => {
    axios
      .get("http://localhost:9000/api/get")
      // .then((res) => res.text())
      .then((resu) => {
        console.log(resu.data);
        this.setState({ apiResponse: resu.data });
      });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.callAPI()}>click me to call API</button>
        <ul>
          {this.state.apiResponse.length > 0
            ? this.state.apiResponse.map((res) => {
                return (
                  <li key={res._id}>
                    {res.username} - {res.email} - {res.password}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default FetchBackend;
