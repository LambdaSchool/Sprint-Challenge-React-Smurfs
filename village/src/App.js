import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const Container = styled.div`
  width: 800px;
  margin: 20px auto;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  updateSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.smurfs) {
      return <h2>Loading...</h2>;
    }
    return (
      <Container>
        <SmurfForm updateSmurfs={this.updateSmurfs} />
        <Smurfs updateSmurfs={this.updateSmurfs} smurfs={this.state.smurfs} />
      </Container>
    );
  }
}

export default App;
