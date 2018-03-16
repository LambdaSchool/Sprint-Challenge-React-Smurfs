import React, { Component } from "react";
import axios from 'axios';

import Smurf from "./Smurf";
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
    state = {
      smurfs: []
    };

	componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => this.setState(() => ({ smurfs: response.data })))
	}

	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.state.smurfs.map((smurf) => {
						return (
							<Smurf
								name={smurf.name}
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

export default Smurfs;
