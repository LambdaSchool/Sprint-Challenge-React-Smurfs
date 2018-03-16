import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf" onClick={props.update} id={props.id}>
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} cm tall</strong>
      <p>Age: {props.age} old</p>
      
      
    </div>
  );
}

export default Smurf;