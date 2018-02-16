import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

  function Smurfs(props) {
    return (
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              key={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
            />
          );
        })}
      </ul>
    );
  }

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return 
            <Smurf 
            key={smurf.id}
            name={smurf.name} 
            age={smurf.age} 
            height={smurf.height} 
             />;
          })}
        </ul>
      </div>
    );
  }
}

Smurfs.propTypes = {
  smurfs: propTypes.array.isRequired,
}

Smurfs.defaultProps = {
  smurfs: [],
};
export default Smurfs;