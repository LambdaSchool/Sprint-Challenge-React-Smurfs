import React, { Component } from 'react';
import {
  Route,
  NavLink
} from "react-router-dom";
import axios from "axios";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = new URL('http://localhost:3333/smurfs/')

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
    axios
    .get(url)
    .then(response => {
      console.log(response.data);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err))
  }

  addSmurf = data => {
    axios
    .post(url, data)
    .then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios
    .delete(`${url}${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err))
  }

  editSmurf = (id, data) => {
    axios
    .put(`${url}${id}`, data)
    .then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <nav-bar>
          <NavLink to='/'>Home</NavLink>{' '}
          <NavLink to='/smurf-form'>Form</NavLink>
        </nav-bar>
        <Route 
        exact path='/'
        render={props => <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} editSmurf={this.editSmurf} {...props} />}
        />
        <Route path='/smurf-form' 
        render={props => <SmurfForm addSmurf={this.addSmurf} {...props} />}
        />
      </div>
    );
  }
}

export default App;
