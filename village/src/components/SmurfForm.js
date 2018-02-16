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
    this.setState({value: event.target.value});
    axios
    //.get('http://localhost:3333/smurfs')
    .post('http://localhost:3333/smurfs', {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    })
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
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

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data);
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log('there was error', error);
      })
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
}



export default SmurfForm;