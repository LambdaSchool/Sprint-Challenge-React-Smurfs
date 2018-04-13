import React, {Component} from 'react';
import axios from 'axios';
class SmurfForm extends Component {
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

        // create new Smurf
        const newSmurf = this.state;

        axios.post('http://localhost:3333/smurfs/', newSmurf)
            .then(response => {
            console.log(response.data);
            this.props.getSmurfs();
            this.setState({
                name: '',
                age: '',
                height: ''
            });

                console.log(`${response}`);
            })
            .catch(error => {
                console.log(`Error added Smurf ${error}`);
                console.log('Adding');
            });
    };

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
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
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}

export default SmurfForm;
