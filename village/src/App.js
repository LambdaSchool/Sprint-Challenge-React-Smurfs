import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => this.setState({smurfs: response.data}) )
      .catch((error) => console.log(error))

  }

  newSmurf = (smurfData) => {
    this.setState({smurfs: smurfData})
  }

  // changeHandler = (e) => {
  //   console.log(e.target.value)
  //   // this.setState({newSmurf: {...this.state.newSmurf, [`${e.target.name}`]: e.target.value}})

  // }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <Link to={'/'}>Home</Link>
       <Link to={'/form'}>Smurf a Smurf</Link>
       <Route path='/form' render={(props) => <SmurfForm {...props} newSmurf={this.newSmurf}/>} />
       <Route exact path={'/'} render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
