import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import SmurfInfo from './SmurfInfo';

class Smurfs extends Component {
  state = {
    smurfs: []
  }
  getSmurfs =this.getSmurfs.bind(this);
  deleteSmurf = this.deleteSmurf.bind(this);

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <SmurfForm getSmurfs={this.getSmurfs} />
        <SmurfInfo smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => response.data)
    .then(smurfs => {
      this.setState({
        smurfs
      });
    });
  }

  deleteSmurf(id) {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(() => {
      this.getSmurfs();
    });
  }
}

export default Smurfs;
