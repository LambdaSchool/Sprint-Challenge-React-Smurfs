import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, Link, NavLink } from 'react-router-dom'
import Navigation from './components/Navigation'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  }
  stateChangeHandler = (stateFromChild) => {
    this.setState({ smurfs: stateFromChild })
  }

  deleteSmurf = (id) => {
    return () => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          this.setState({ smurfs: response.data })
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/smurf-form" render={props => (<SmurfForm stateChangeHandler={this.stateChangeHandler} />)} />
        <Route exact path="/" render={props => (<Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />)} />
      </div>
    );
  }
}

export default App;
