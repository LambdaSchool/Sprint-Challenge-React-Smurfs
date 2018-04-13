import React, { Component } from 'react';

import Smurf from './Smurf';

const Smurfs = props =>  {

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {console.log('inside smurfs' ,props.smurfs)}
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSelf={props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );

}

export default Smurfs;
