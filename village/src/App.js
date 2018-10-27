import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    console.log(this.state.smurfs);
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => console.log('error!'))
  }

  addSmurf = addedSmurf => {
    axios
      .post(`http://localhost:3333/smurfs`, addedSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => console.log('error!'))
  }

  deleteSmurf = id => {
    console.log('clicked')
    return () => {
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(error => console.log('error!'))
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-list'>Smurf List</NavLink>
          <NavLink to='/smurf-form'>Add a sSmurf!</NavLink>
        </div>
        <Route path='/smurf-form' render={props => (
          <SmurfForm
            {...props}
            smurf={this.addSmurf}
          />
        )} />
        <Route path='/smurf-list' render={props => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs}
            delete={this.deleteSmurf}
          />
        )} />
        <Route exact path='/:id' render={props => (
          <SmurfCard
            {...props}
            smurfs={this.state.smurfs}
          />
        )} />
      </div>
    );
  }
}

export default App;