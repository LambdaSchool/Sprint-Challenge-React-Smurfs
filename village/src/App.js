import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

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
  
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    axios.get('http://localhost:3333/smurfs')
    .then( response => this.setState( { smurfs: response.data } ) )
    .catch( err => console.log(err))
  }

  postSmurfToServer = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then( response => {
      const newSmurfs = this.state.smurfs;
      newSmurfs.push(smurf);
      this.setState( { smurfs: newSmurfs } )
    })
    .catch( err => console.log(err))
    
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props =>
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          }
        />
        <Route
          path="/smurf-form"
          render={props =>
            <SmurfForm
              {...props}
              postSmurfToServer={this.postSmurfToServer}
            />
          }
        />
        
        
      </div>
    );
  }
}

export default App;
