import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

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

  componentDidMount= () => {
    this.fetchSmurfs();
  }

  fetchSmurfs = () => {
    axios
      .get(url)
      .then(response => {
        const smurfs = response.data;
        this.setState({ smurfs });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route path='/smurfs' render={props => <SmurfForm fetchSmurfs={this.fetchSmurfs} />} />
        <Route path ='/smurfs' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
