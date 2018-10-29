import React from 'react';
import './Smurfs.css'
import Smurf from './Smurf';

class Smurfs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Smurfs">
        <div className='headingContainer'>
          <h1>Smurf Village</h1>
        </div>
        <ul>
          {this.props.mySmurfs.map(smurf => {
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
