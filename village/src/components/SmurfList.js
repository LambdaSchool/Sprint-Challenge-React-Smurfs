import React from 'react';
import Smurf from './Smurf';

const SmurfList = (props) => {
  return (
    <div className="SmurfList">
        <ul>
          { props.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;  
        })}
       </ul> 
    </div>
  );
}

export default SmurfList;