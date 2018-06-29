import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    const context = this;
    axios
      .get(this.url)
      .then((response) => {
        context.setState({
          smurfs: response.data,
        });
      })
      .catch((response) => {
        console.log('Failed ', response.data);
      });
  }

  addSmurf = (smurf) => {
    const context = this;
    axios
      .post(this.url, smurf)
      .then((response) => {
        context.setState({
          smurfs: response.data,
        });
      })
      .catch((response) => {
        console.log('Failed ', response.data);
      });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
