import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class DeleteSmurff extends Component {
    constructor(props) {
        super(props);
        this.state={
            smurfs: [],
            name: "",
            age: "",
            height: ""
        }
    }

    componentDidMount() {
        this.getSmurfs();
    }
        getSmurfs = () => {
            axios
                .get(`http://localhost:3333/smurfs`)
                .then(response => {
                    this.setState({ smurfs: response.data })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        deleteSmurf = (smurfsId) => {
            axios
                .delete(`http://localhost:3333/smurfs/${smurfsId}`)
                .then(response => {
                    this.componentDidMount();
                    console.log(smurfsId);
                })
                .catch(err => {
                    console.log(err);
                })
                this.setState({
                    id: '',
                    name: '',
                    age: '',
                    height: ''
                })
        }
        render() {
            return (
                <div>
                    <button onClick={() => this.deleteSmurf(this.props.id)}> Delete Smurf </button>
                </div>
            );
        }
}

export default DeleteSmurff;