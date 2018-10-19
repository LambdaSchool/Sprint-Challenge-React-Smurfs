import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = (event, props) => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (!this.state.name || !this.state.age || !this.state.height) {
      console.log("Please fill each box to complete");
    } else {
      let newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      };
      props.saveSmurf(event, newSmurf)
      props.history.push('/')
    }
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={event => this.addSmurf(event, this.props)}>
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
