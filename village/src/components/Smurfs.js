import React, { Component } from 'react';

import './style.css';


import './style.css';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        
        <img src = {'http://cdn.collider.com/wp-content/uploads/The-Smurfs-movie-image-slice1.jpg'} alt = {'Smurfs'} />
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
