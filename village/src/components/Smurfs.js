import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {


  getSmurfs(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(smurfs => this.setState({ smurfs: smurfs.data }))
    .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps){
    if(prevProps.smurfs !== this.props.smurfs){
      this.getSmurfs();
    }
  }


  render() {
    console.log(this.props.smurfs);

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
