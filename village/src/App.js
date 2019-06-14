import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    // fetch data from the api
    axios
      .get("http://localhost:3333/smurfs")
      // axios.get is asking for the information from the server
      .then(response => {
        console.log(response);
        // response is the response we get back from the server
        // set our state with the new data
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // 56 takes the user to http://localhost:3000/
  // 61 takes us to http://localhost:3000/smurfs/add
  // 70 renders the smurfs when going through "/" 
  // 72 renders the Smurf Form when you go through "/smurfs/add"
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              All Smurfs
            </NavLink>
          </li>
          <li>
            <NavLink to="/smurfs/add" activeClassName="activeNavButton">
              Add a Smurf
            </NavLink>
          </li>
        </ul>

        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} />}
        />
        <Route path="/smurfs/add" render={props => <SmurfForm />} />
      </div>
    );
  }
}

export default App;