import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentWillMount() {
    this.updateSmurfs();
  }

  updateSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("Get", response);
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.updateSmurfs();
        console.log("Delete", response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Header} />

        <Route path="/smurfs" render={ (props) =>
          <div>
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
            <Smurfs {...props} smurfs={this.state.smurfs}
                               deleteSmurf={this.deleteSmurf} />
          </div>
          }
        />

      </div>
    );
  }
}

export default App;
