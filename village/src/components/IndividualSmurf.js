import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const IndividualSmurf=(props)=>{
    let thisId=props.match.params.id;
    thisId=thisId.toString();
   
return(
    <div>
        {props.smurfs.map(
            (smurf)=>{
                if(smurf.id.toString()===thisId){
                    return(
                        <div>
                                
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={()=>props.deleteMethod(thisId)}>delete me</button>
                        </div>
                            
                    )
                }


            }


        )
        
    
    
    }
    </div>
)    
}

export default IndividualSmurf;