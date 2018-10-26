import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    axios 
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <NavLink exact to='/'>Smurfs</NavLink>
          <br></br>
          <NavLink exact to='/smurf-form'>Smurf Form</NavLink>  
        </div>

        <Route path="/smurf-form" render={() =>
          <SmurfForm/>}
        />
        <Route exact path="/" render={(props) => 
          <Smurfs
            {...props}
            smurfs={this.state.smurfs}/>} 
        />
      </div>
    );
  }
}

export default App;
