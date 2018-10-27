import React, { Component } from 'react';
import axios from 'axios';

import './smurf.css';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    addSmurf = event => {
        event.preventDefault();
        // Updating the current smurf
        axios.put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, {name: this.state.name, age: this.state.age, height: this.state.height})
        .then(res => {
            this.props.updateSmurfData(res.data);
        }) 
        .catch(err => console.log(err))

        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
        <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
            <input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
            />
            <input
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
            />
            <input
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
            />
            <button type="submit">Edit this Smurf</button>
            </form>
        </div>
        );
    }
}

export default UpdateForm;
