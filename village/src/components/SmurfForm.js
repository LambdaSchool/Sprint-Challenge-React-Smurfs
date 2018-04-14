import React, { Component } from 'react';
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

 
  addSmurf = () => {
    
    const {name, age, height} = this.state
    axios.post('http://localhost:3333/smurfs', { name, age, height})
      .then(() => {
        axios.get('http://localhost:3333/smurfs')
        .then( response => {
          this.setState({smurfs: response.data})
      })
      .catch( err => console.log(err))
    })
  }
  
    
    /* this.setState({
      name: '',
      age: '',
      height: ''
    }); */
  
  
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
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
