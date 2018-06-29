import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const URL = `http://localhost:3333/smurfs`;

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
    axios.get(URL)
      .then(res => {
        console.log('GET RES');
        this.setData(res.data);
    }).catch(err => console.log(err));
  }

  setData = data => {
    this.setState({smurfs: data});
  };

  handleKick = id => {
    axios.delete(`${URL}/${id}`)
      .then(res => {
        console.log('DELETE RES');
        this.setData(res.data);
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} handleKick={this.handleKick}/>
      </div>
    );
  }
}

export default App;
