import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
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
 componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState(() => ({ smurfs: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
}

 
 
 
 
  render() {
    return (
      <div className="App">
        <SmurfForm /> 
        <Smurfs smurfs={this.state.smurfs} />
       
         <Route path="/components" component={SmurfForm} />
          <Route exact path="/components" component={Smurfs} /> 
      
       {/* <Route path="/component/" component={Smurf} /> */}
      </div>
    );
  }
}

export default App;