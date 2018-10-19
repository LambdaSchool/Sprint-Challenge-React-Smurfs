import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
            <NavLink to={"/smurfs"}>Smurfs</NavLink>
            <NavLink to={"/form"}>Add New Smurf</NavLink>
          </nav>
        </header>
        <div className="container">
          <Route path="/form" component={SmurfForm} />
          <Route
            path="/smurfs"
            render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
