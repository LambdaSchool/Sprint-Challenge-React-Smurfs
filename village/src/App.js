import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  state = { Smurfs: [] }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(response=> {
      this.setState({ Smurfs: response.data })    
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={() => <Smurfs smurfs={this.state.Smurfs}/>} />
        <Route path='/form' component={() => <SmurfForm />} />
      </div>
    );
  }
}

export default App;