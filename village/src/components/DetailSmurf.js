import React, {Component} from 'react';
import axios from 'axios';

class DetailSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
          smurf: []
        };
    }

    componentDidMount() {
        this.setState({
            smurf: this.props.smurf
        });
    }

    deleteSmurf = () => {
        axios.delete(`http://localhost:3333/smurfs/${this.state.smurf.id}`)
            .then(res => {
                console.log(res.status);
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    }
  
    render() {
        return (
            <div className="Smurf">
                <h3>{this.state.smurf.name}</h3>
                <strong>{this.state.smurf.height} tall</strong>
                <p>{this.state.smurf.age} smurf years old</p>
                <button onClick={this.deleteSmurf}>Delete</button>
            </div>
        );
    } 
};

DetailSmurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default DetailSmurf;