import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    console.log(`constructing in Smurfs`)
  }

  render(props) {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;