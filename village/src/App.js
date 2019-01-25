import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

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
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addSmurf = data => {
    axios
      .post('http://localhost:3333/smurfs', data)
      .then(res => {
        console.log(res.data)
        this.setState({
          smurfs: res.data
        })
       })
      .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios
      .delete('http://localhost:3333/smurfs/' + id)
      .then(res =>{
        console.log(res)
        this.setState({
            smurfs: res.data
         })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <NavLink exact to='/'>Smurf Village </NavLink>{' '}
        <NavLink to='/smurf-form'> Apply for Smurfizenship</NavLink>
        <Route
          path='/smurf-form'
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}/>
          )}
        />
        <Route
          exact path='/'
          render={props => (
            <Smurfs
              {...props}
              deleteSmurf = {this.deleteSmurf}
              smurfs={this.state.smurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;
