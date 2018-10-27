import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    // Request data to read 
    axios.get('http://localhost:3333/smurfs/')
    .then(res => {
      this.setState({
        smurfs: res.data, // Update our app's state with the new data.
      })
    })
    .catch(err => console.log(err))
  }
  
  updateSmurfData = (newSmurfData) => {
    this.setState({
      smurfs: newSmurfData,
    })
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      {/* Let's edit SmurfForm and pass along an update function for the returned smurf data when we create a new smurf. */}
        <SmurfForm updateSmurfData={this.updateSmurfData}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
