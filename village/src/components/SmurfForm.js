import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.serverURL = "http://localhost:3333/smurfs";

    this.state = {
      smurfs : [],
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post(this.serverURL, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(response => console.log(response.data))
      // this.setState({ smurfs: response.data }))
    .catch(error => console.log(error));
    
console.log(this.state.smurfs);
    this.setState({
      smurfs:[],
      name: '',
      age: '',
      height: ''
    });

    this.props.updateSmurfs(this.state.smurfs);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
