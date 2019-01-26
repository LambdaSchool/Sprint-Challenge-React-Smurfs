import React, {Component} from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SingleSmurf from './components/SingleSmurf.js';
import Nav from './components/nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://www.localhost:3333/smurfs').then(data => {
      console.log(data.data);
      this.setState({smurfs: data.data});
    });
  }

  updateSmurf = smurf => {
    this.setState({smurfs: smurf.data});
  };

  deleteSmurf = smurf => {
    axios
      .delete(`http://www.localhost:3333/smurfs/${smurf}`)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              newId={this.state.smurfs.length + 1}
              updateState={this.updateSmurf}
            />
          )}
        />

        <Route
          exact
          path="/smurf/:id"
          render={props => (
            <SingleSmurf
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
