import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.fetchSmurfs();
  }

  fetchSmurfs() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data }))
    .catch(error => {
      console.error('Server Error', error)
    });
  }

  handleNewSmurf = newSmurfs => {
    this.setState({ smurfs: newSmurfs})
  }

  handleDelete = id => {
    let smurfsNow = this.state.smurfs;
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => this.setState({smurfs: smurfsNow.filter(smurf => smurf.id !== id)}))
    .catch(error => {
      console.error('Server Error', error)
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ routeProps =>
        <Smurfs {...routeProps} smurfs={this.state.smurfs} handleDelete={this.handleDelete}/> } />
        <Route exact path='/' render={ routeProps =>
        <SmurfForm {...routeProps} handleNewSmurf={this.handleNewSmurf}/> } />
      </div>
    );
  }
}

export default App;
