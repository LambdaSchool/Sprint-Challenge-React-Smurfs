import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.5);
  width: 30%;

  h3 {
    font-weight: bold;
    font-size: 2rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    outline: none;
    border: transparent;
    border-radius: 5px;
    padding: 1rem 3rem;
    color: #fff;
    margin-top: 2rem;
    cursor: pointer;
  }
  .btn-remove {
    background: #db3832;
  }

  .btn-edit {
    background: #75aff5;
  }
`;

const Smurf = props => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="btns">
        <button
          className="btn btn-remove"
          onClick={() => props.deleteSmurf(props.id)}
        >
          Remove
        </button>
        <button
          className="btn btn-edit"
          onClick={() => props.handleUpdateClick(props.id)}
        >
          Edit
        </button>
      </div>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
