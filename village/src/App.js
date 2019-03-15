import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, import 'module'; } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    console.log('CDM now running');
    axios
      .get ('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({ 
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  postHandle=(data) => {
    this.setState({smurfs:data})
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form">SmurfForm</NavLink>
        </div>
        <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} postHandler={this.postHandler} />} />
      </div>
    );
  }
}

export default App;
