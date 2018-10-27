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
      smurfs: [],
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    //gets inital data from server and set it on state so we can access/update it later
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err, "Smurfs not found"));
  }

  //write a changehandler function that can be passed down to the form component
  //this lets us control the form and keep state updated for when we addSmurf
  changeHandler = (key, value) => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [key]: value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    let smurf = this.state.newSmurf;
    if (smurf.name !== "" && smurf.age !== "" && smurf.height !== "") {
      //this setState to apply an id is only necessary if the server doesn't handle it for me
      // this.setState({
      //   newSmurf: {
      //     ...this.state.newSmurf,
      //     id: this.state.smurfs.length+1
      //   }
      // })
      axios
        .post("http://localhost:3333/smurfs", this.state.newSmurf)
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log(err, "Smurf addition unsuccessful, you filthy animal");
        });

      this.setState({
        newSmurf: {
          name: "",
          age: "",
          height: ""
        }
      });
    } else {
      alert(
        "You really must out the whole form to add another completely needed smurf."
      );
    }
  };

  render() {
    if (!this.state.smurfs.length) {
      return <h1>smurfs can only run so fast, hold on...</h1>;
    } else {
      return (
        <div className="App">
          <nav className="nav-header">
            <NavLink exact to="/" activeClassName="activePageLink">
              Smurf Hit List
            </NavLink>
            <NavLink to="/smurf-form" activeClassName="activePageLink">
              Add New Smurf
            </NavLink>
          </nav>

          <Route
            path="/smurf-form"
            render={ownProps => (
              <SmurfForm
                {...ownProps}
                newSmurf={this.state.newSmurf}
                addSmurf={this.addSmurf}
                changeHandler={this.changeHandler}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={ownProps => (
              <Smurfs {...ownProps} smurfs={this.state.smurfs} />
            )}
          />
        </div>
      );
    }
  }
}

export default App;