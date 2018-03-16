import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        < SmurfForm />
        < Route path='/' component={Smurfs} />
      </div>
    );
  }
}

export default App;
