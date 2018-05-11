import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  state = {
    smurfs: [],
  }

  updateState = data => {
    this.setState({ smurfs: data });
  }

  deleteFromState = data => {
    let smurfs = this.state.smurfs;
    this.setState({
      smurfs: smurfs.filter(smurf => smurf.id !== data.id)
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3333/Smurfs')
      .then(response => this.updateState(response.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <SmurfForm 
          stateHandler={this.updateState}
        />
        <Smurfs 
          smurfs={this.state.smurfs}
          stateHandler={this.deleteFromState}
        />
      </div>
    );
  }
}

export default App;