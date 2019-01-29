import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Axios from "axios";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  setSmurfs = _ => {
    Axios.get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Link to="/smurfs">
          <img
            className="logo"
            alt="smurf logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Smurfs_logo.svg/1024px-The_Smurfs_logo.svg.png"
          />
        </Link>
        {this.props.match.isExact && <Redirect to="/smurfs" />}
        <Route path="/" component={Nav} />
        <Route
          path="/smurfs-form"
          render={props => <SmurfForm {...props} setSmurfs={this.setSmurfs} />}
        />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurfs/:id"
          render={props => <Smurf {...props} />}
        />
      </div>
    );
  }
}

export default App;
