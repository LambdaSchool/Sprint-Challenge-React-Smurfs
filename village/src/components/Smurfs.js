import React, {Component} from "react";
import {Link} from "react-router-dom";

import Smurf from "./Smurf";
import "./Smurfs.css";

class Smurfs extends Component {
  render() {
    // if (!this.props.smurfs) {
    //   return <h2>Loading Smurfs</h2>;
    // }

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`} key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <button onClick={e => this.props.deleteSmurf(e, smurf.id)}>
                  Delete
                </button>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
