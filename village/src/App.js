import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

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
        {/* create(Post) field */}
        <SmurfForm getSmurfs={this.getSmurfs} />
        {/* read(Get) mapping of*/}
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
}

export default App;
