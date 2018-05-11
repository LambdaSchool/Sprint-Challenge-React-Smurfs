import React, { Component } from 'react';
import axios from 'axios'; 
import { Header } from 'village-src-components';
import { Route , Link, NavLink } from 'react-router-dom';

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
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount () {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({smurfs: response.data}))
      .catch(err => { throw new Error (err) }) 
  }


  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
        {/* <Navigation /> */}
          <Link to="/">Welcome!</Link>
          <Link to="/smurfs">Smurf Village</Link>
          <Route exact path = "/" component={Header}>Welcome</Route>
          <Route path = "/smurfs" component={App}>Smurf Village</Route>
      </div>
    );
  }
}

export default App;
