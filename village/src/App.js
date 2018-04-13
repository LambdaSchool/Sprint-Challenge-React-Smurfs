import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Pathfinder from "./components/Pathfinder.js";
import Home from "./components/Home.js";
import "./App.css";

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }

  // Mount
  componentDidMount() {
    this.getSmurfs();
  }

  // Get Smurfs list
  getSmurfs = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = smurfId => {
    axios
      .delete(`http//localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        this.props.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/smurfs" component={Pathfinder} />
      </div>
    );
  }
}

export default App;
