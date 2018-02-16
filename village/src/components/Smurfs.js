import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
          <SmurfForm />
        </ul>
      </div>
    );
  }

}

export default Smurfs;