import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  /*const URL = 'http://localhost:3333/smurfs'; Not sure why this is giving me trouble, will examine later*/

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log('Get Response:', response.data);
        this.setState({smurfs: response.data});
      })
      .catch(err => {
        console.log('You have error:', err);
      })
  }

  setData = data => {
    this.setState({smurfs: data});
  }



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/smurfs"><button>View Smurfs</button></NavLink>

        <Route exact path="/" component={Header} />
        <Route path="/smurfs" render={props => <SmurfForm {...props}
        setData={this.setData} />} />
        <Route path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
