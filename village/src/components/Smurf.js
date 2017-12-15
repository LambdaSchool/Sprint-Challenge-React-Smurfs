import React from 'react';


const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <button>Delete</button>
    </div>
  );
}

export default Smurf;