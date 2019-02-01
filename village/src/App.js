import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
        newSmurf: {
          name: '',
            age: '',
            height: ''
        }
    };
  }
  componentDidMount() {
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
          console.log(response.data);
          this.setState({ smurfs: response.data })
        })
        .catch(error => {
            console.log(error)
        })
  };
  handleChanges = event => {
      this.setState({
        newSmurf: {
            ...this.state.newSmurf, [event.target.name]: event.target.value
        }
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} handleChanges={this.handleChanges} />
      </div>
    );
  }
}

export default App;
