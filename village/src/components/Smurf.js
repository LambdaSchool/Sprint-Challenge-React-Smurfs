import React from 'react';
import axios from 'axios';
import Smurfs from './Smurfs';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
