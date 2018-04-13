import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";


export default class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };

    this.getSmurfs = this.getSmurfs.bind(this);
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs() {
    axios.get("http://localhost:3333/smurfs").then(response => {
      this.setState({
        smurfs: response.data
      });
    });
  }

  render() {
    return (
      <div className="smurfs">
        <SmurfForm getSmurfs={this.getSmurfs} />
        <h1>Smurf Village</h1>
        <ul className="smurfs-container">
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}