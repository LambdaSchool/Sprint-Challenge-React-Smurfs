import React, { Component } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage'


const smurfData = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(smurfData).then(response => {
      this.setState({smurfs: response.data});
    });
  }

  setData = (data) => this.setState({smurfs: data});

  render() {
    if (this.state.smurfs.length !== 0) {
      return (
        <div className="App">
          <Route exact path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
          <Route path="/smurfs/:id" render={props => <SmurfPage {...props} smurfs={this.state.smurfs} />} />
          <Route exact path="/" component={Header} />
          <Route path="/smurf-counsel" render={props => <SmurfForm {...props} smurfs={this.state.smurfs} setData={this.setData} />} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default App;
