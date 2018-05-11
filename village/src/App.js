import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import UpdateForm from './components/UpdateForm.js';
import SmurfView from './components/SmurfView.js';

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


  //I made this to hand down to the SmurfForm component, which will allow it to update the app state
  //Needs explicit binding to work
  handleSmurfsUpdate(smurfs) {
    this.setState({smurfs: smurfs});
  }

  //Use a delete request to delete smurfs.  Gets passed all the way down to the Smurf component
  handleSmurfDelete(id) {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => this.handleSmurfsUpdate(response.data))
      .catch((err) => console.log(err));

  }


  componentDidMount() {
    //get the smurf data from the server
    //then put it on the state
    axios.get('http://localhost:3333/smurfs')
      .then((response) => this.handleSmurfsUpdate(response.data))
      .catch((err) => console.log(err));
  }



  render() {
    return (

      <div className="App">
        <Route path="/smurfs" render={(props) => (
          <div>
            <SmurfForm handleSmurfsUpdate={this.handleSmurfsUpdate.bind(this)} />
            <Smurfs smurfs={this.state.smurfs} handleSmurfDelete={this.handleSmurfDelete.bind(this)} />
          </div>
        )} />

        <Route path="/update/:id" render={(props) => (
          <div>
            <UpdateForm {...props} smurfs={this.state.smurfs} handleSmurfsUpdate={this.handleSmurfsUpdate.bind(this)} />
          </div>
        )} />

        <Route path="/view/:id" render={(props) => (
          <div>
            <SmurfView {...props} smurfs={this.state.smurfs} handleSmurfDelete={this.handleSmurfDelete.bind(this)} />
          </div>
        )} />

        <Route exact path="/" render={() => (
          <Header />
        )} />

      </div>
    );
  }
}

export default App;
