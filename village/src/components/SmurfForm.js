import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      height: ""
    };
  }

  addHanddler = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (
      this.state.name !== "" &&
      this.state.height !== "" &&
      this.state.age !== 0
    ) {
      console.log("working");
      this.props.addNewSmurf(this.state);
      this.setState({
        name: "",
        age: 0,
        height: ""
      });
      this.props.history.replace("/");
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addHanddler}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
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
