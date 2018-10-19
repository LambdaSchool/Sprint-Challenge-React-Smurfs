import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  addNewSmurf = data => {
    this.setState({ smurfs: data })
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

        <nav>
          <NavLink exact to='/'>
            Smurfs
          </NavLink>

          <NavLink to='/smurfs/add'>
            Add a Smurf
          </NavLink>
        </nav>

        <Route exact path='/' render={ownProps => <Smurfs smurfs={this.state.smurfs}
          addNewSmurf={this.addNewSmurf}
          {...ownProps} />}
        />
        <Route exact path='/smurfs/add' render={ownProps =>
          <SmurfForm addNewSmurf={this.addNewSmurf}
            {...ownProps} />}
        />

      </div>
    );
  }
}

export default App;
