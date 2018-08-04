import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.smurf ? this.props.smurf : null
    };
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      axios
        .get(`http://localhost:3333/smurf/${this.props.match.params.id}`)
        .then(response => this.setState({ smurf: response.data }))
        .catch(err => console.error(err));
    }
  }
  render() {
    return (
      <div className="Smurf">
        <h3>{this.state.smurf.name}</h3>
        <strong>{this.state.smurf.height} tall</strong>
        <p>{this.state.smurf.age} smurf years old</p>
        <div className="actions">
          <button
            data-id={this.state.smurf.id}
            onClick={this.props.deleteSmurf}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
