import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataSource = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: [],
      editingSmurf: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    this.getSmurfs();
  };

  setSmurfs = (smurfsArr) => {
    this.setState({smurfs: smurfsArr});
  };

  handleSmurfEdit = (editSmurf) => {

  };

  /* C */
  postSmurf = (newSmurf) => {
    if(newSmurf.name && newSmurf.age && newSmurf.height) {
      Axios
        .post(this.dataSource, newSmurf)
        .then( (response) => this.setSmurfs(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  /* R */
  getSmurfs = () => {
    Axios
      .get(this.dataSource)
      .then( (response) => this.setSmurfs(response.data) )
      .catch( (err) => console.error(err) );
  };

  /* U */
  putSmurf = (updatedSmurf, smurfId) => {
    if(updatedSmurf.name && updatedSmurf.age && updatedSmurf.height) {
      Axios
        .put(`${this.dataSource}/${smurfId}`, updatedSmurf)
        .then( (response) => this.setSmurfs(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  /* D */
  deleteSmurf = (smurfId) => {
    Axios
      .delete(`${this.dataSource}/${smurfId}`)
      .then( (response) => this.setSmurfs(response.data) )
      .catch( (err) => console.error(err) );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route 
          exact 
          path='/' 
          render={() => 
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} editingSmurf={this.state.editingSmurf} />
          } 
        />
        <Route 
          path='/smurf-form' 
          render={(props) => <SmurfForm {...props} postSmurf={this.postSmurf} putSmurf={this.putSmurf} />} 
        />
      </div>
    );
  }
}

export default App;
