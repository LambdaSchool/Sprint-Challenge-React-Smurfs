import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: '',
      },
      editingId: null,
      activeFriend: null,
      isEditing: false
    };
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  changeHandler = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewSmurf = () => {
    axios
      .post('http://localhost:3333/smurfs', this.state.smurf)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => console.log(error));
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm 
        addNewSmurf = {this.addNewSmurf}
        changeHandler = {this.changeHandler}
        smurf = {this.state.smurf}
        />
        <Smurfs 
        smurfs={this.state.smurfs} 
        
        />
      </div>
    );
  }
}

export default App;
