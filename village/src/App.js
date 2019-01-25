import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
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
    axios.get("http://localhost:3333/smurfs").then(response => {
      this.setState({
        smurfs: response.data
      });
    });
  }
  addNewSmurf = data => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  delete = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Smurf Nav</h1>
          <div>
            <NavLink exact to="/">
              Smurf List
            </NavLink>
            <NavLink to="/smurf-form">Smurf-fourm</NavLink>
          </div>
        </nav>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              delete={this.delete}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
