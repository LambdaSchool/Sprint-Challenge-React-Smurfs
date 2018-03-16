import React, { Component } from 'react';

import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
    this.getSmurfs = this.getSmurfs.bind(this);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then(response  => {
        this.setState({
          smurfs: response.data
        });
        console.log(this.state.smurfs);
      })
      .catch(error => {
        console.log(`Error getting friends: ${error}`);
      })
  }

  componentDidMount() {
    this.getSmurfs();
  }
}

export default Smurfs;