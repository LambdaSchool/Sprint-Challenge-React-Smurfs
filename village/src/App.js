import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfList: [],
  }
  render() {
    return (
      <div className="App">
        <SmurfForm onSubmission={this.loadSmurfs} />
        <Smurfs smurfList={this.state.smurfList} onDelete={this.deleteSmurf} onUpdate={this.updateSmurf} />
      </div>
    );
  }

  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {this.setState({ smurfList: response.data })})
      .catch(error => console.error(error));
  };

  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log('You deleted', response.data.SmurfRemoved.name);
        this.loadSmurfs();
      })
      .catch(error => console.error('error:', error));
  }

  updateSmurf = smurf => {
    return (
      axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(() => {
          this.loadSmurfs();
        })
    );
  }

}

export default App;
