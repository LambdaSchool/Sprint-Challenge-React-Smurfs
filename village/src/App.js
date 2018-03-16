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
      name: '',
      age: '',
      height: '',
      id: '',
    };

    console.log(`constructing ... in App`)
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }
  
  componentDidMount() {
    console.log(`didMounting in Smurfs ...`)
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
      console.log(`res.data: ${res.data}`);
      this.setState({ smurfs: res.data });
      console.log(`smurfs: ${this.state.smurfs}`);
    })
    .catch( error => console.error(error))
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {};
    smurf.name = this.state.name;
    smurf.age = this.state.age;
    smurf.height = this.state.height;
    console.log('adding a smurf')

    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(`res.data: ${res.data}`);
        this.setState({ smurfs: res.data });
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        console.log(`smurfs: ${this.state.smurfs}`);
      })
      .catch(error => console.error(error))
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm
          addSmurf={this.addSmurf}
          updateName={this.updateName}
          updateAge={this.updateAge}
          updateHeight={this.updateHeight}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
        />
        <Smurfs 
          smurfs={this.state.smurfs}
        />
      </div>
    );
  }
}

export default App;
