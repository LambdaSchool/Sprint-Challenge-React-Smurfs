import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };
  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadFriends}/>
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }
  
  componentDidMount () {
    this.loadFriends();
  }
  
  loadFriends = () => {
    Axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
  };
}

export default App;
