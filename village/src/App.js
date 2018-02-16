import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  state = {
    smurfs: [],
  };

  getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs/")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log("there was an error", error));
  };

  addSmurf = smurf => {
    const endpoint = `http://localhost:3333/smurfs/`;
    axios
      .post(endpoint, smurf)
      .then(response => this.getSmurfs())
      .catch(error => console.log("error:", error));
  };

  editSmurf = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    axios.put(endpoint, smurf).then(response => this.getSmurfs());
  };

  deleteSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(endpoint)
      .then(response => this.getSmurfs())
      .catch(error => console.log("error:", error));
  };

  componentDidMount = () => {
    this.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <SmurfForm onUpdate={this.getSmurfs} add={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} delete={this.deleteSmurf} edit={this.editSmurf} />
      </div>
    );
  }
}

export default App;
