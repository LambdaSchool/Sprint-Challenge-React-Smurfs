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
    // add code to create the smurf using the api
    console.log(this.state);

    let { name, age, height } = this.state;
    let newSmurf = {
      "name": name,
      "age": Number(age),
      "height": height,
    }

    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((response) => {
      console.log('Response', response);
    })
    .catch((err) => {
      console.error('Error', err)
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf(event) {

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
          <h3>ADD SMURF</h3>
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
        <form onSubmit={this.updateSmurf}>
          <h3>UPDATE SMURF</h3>
          <input 
            placeholder="name"
            value={this.state.name}
          />
          <button type="submit">Update smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;