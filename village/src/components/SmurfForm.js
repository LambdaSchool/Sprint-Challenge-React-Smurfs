import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    let currentSmurf = this.props.smurfs.find(
      smurf => smurf.id.toString() === this.props.match.params.id
    );

    this.setState({
      name: this.props.update ? currentSmurf.name : "",
      age: this.props.update ? currentSmurf.age : "",
      height: this.props.update ? currentSmurf.height : ""
    });
  }

  submitHandler = event => {
    event.preventDefault();

    if (this.props.update) {
      this.props.updateSmurf(this.state, this.props.match.params.id);
    } else {
      this.props.addNewSmurf(this.state);
    }

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button type="submit">
            {this.props.update ? "Update Smurf" : "Add to the village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
