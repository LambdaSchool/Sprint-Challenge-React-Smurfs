import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }
  componentDidMount() {
    Axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        })
      })
      .catch(error => {
        console.log(error, 'GET REQ FAIL')
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add Smurf!</NavLink>
        </nav>
        <div className="smurf-container">
          <Route exact path="/" render={(props) => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              addSmurf={this.addSmurf}
            />
          )} />
          <Route path='/smurf-form' render={(props) => (
            <SmurfForm
              smurfs={this.state.smurfs}
            />)}
          />
        </div>
      </div>
    )
  }
}

export default App;
