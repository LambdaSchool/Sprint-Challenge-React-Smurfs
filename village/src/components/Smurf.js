import React from 'react';

const Smurf = props => {
  const deleteSmurf = id => {
    props.deleteSmurf(id)
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span className="delete-btn" onClick={() => deleteSmurf(props.id)}>X</span>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

