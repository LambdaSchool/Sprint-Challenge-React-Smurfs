import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        position: this.state.position,
        email: this.state.email,
      })
      .then(res => {
        this.setState({ 
          name: '', 
          age: '',
          height: '',
        });
      })
      .catch(error => {
        alert('There was an error: ', error);
      });    
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
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            required
            type='text'
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            required
            type='number'
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            required
            type='text'
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;