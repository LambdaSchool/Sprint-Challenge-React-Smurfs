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
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state)
    .then( res => console.log(res.status, res.data) )
    .then( this.props.getSmurfs )
    .catch( e => console.log(e) );

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        onChange={this.handleInputChange}
        className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button
            onClick={this.addSmurf}
            type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
