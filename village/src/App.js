import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
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
    console.log('mounted');
    axios.get('http://localhost:3333/smurfs')
    .then(response => {console.log('Initial Get: ' + response.statusText); this.setState({smurfs: response.data})})
    .catch(err => {console.log('Initial Get: ' + err)})
  }

  updateSmurfs = (smurf) => {
    axios.post('http://localhost:3333/smurfs', {...smurf})
    .then(response => {console.log('Smurf Post: ' + response.statusText); this.setState({smurfs: response.data})})
    .catch(err => {console.log('Smurf Post: ' + err)})
  } 


  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfs={this.updateSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
