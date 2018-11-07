import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink} from 'react-router-dom'
import Smurf from './components/Smurf'

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <NavLink to='/'>Smurfs</NavLink>
      {' '}
      <NavLink to='/smurf-form'>Smurf Form</NavLink> 
      <Route exact path='/' component={Smurfs}/>
      <Route exact path='/smurf-form' component={SmurfForm} />
      <Route exact path='/smurfs' component={Smurfs}/>
      <Route exact path='/smurfs/:id' component={Smurf} />
      </div> 
    );
  }
}

export default App;
