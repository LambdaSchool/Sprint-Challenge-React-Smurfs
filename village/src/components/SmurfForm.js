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

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.add(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    // axios
    //   .post('http://localhost:3333/smurfs', this.state)
    //   .then(response => {
    //     console.log('response from post', response);
    //     this.props.onUpdate();
    //     this.setState({
    //     name: '',
    //     age: '',
    //     height: ''
    //     });
    //   })
    //   .catch(error => {
    //     console.error('error saving the data');
    //   });
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
}

export default SmurfForm;