import React, { Component } from 'react';

class Smurf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={id => this.props.deleteSmurf(this.props.id)}>Delete</button>
        <button onClick={id => this.props.updateSmurf(this.props.id)}>Update</button>
      </div>
    );
  };
}

export default Smurf;
