import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Link } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <nav class="nav">
          <NavLink
            to="/"
            className="navlink"
            exact
            activeClassName="navlink-selected"
          >
            Smurfs
          </NavLink>
          <NavLink
            to="/smurf-form"
            className="navlink"
            activeClassName="navlink-selected"
          >
            Add Smurf
          </NavLink>
        </nav>
        <div className="App">
          <Route exact path="/smurf-form" component={SmurfForm} />
          <Route
            exact
            path="/"
            render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
