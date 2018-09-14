import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SmurfedForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 15%;
  border: solid #8b8b92 2px;
  > input {
    font-size: 1.6rem;
  }
`;

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
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height};

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log("post response:", response);
        this.setState({name: "", age: "", height: ""})
      })
      .catch(error => console.log(error));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <SmurfedForm onSubmit={this.addSmurf}>
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
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </SmurfedForm>
      </div>
    );
  }
}

export default SmurfForm;
