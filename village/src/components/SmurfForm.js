import React, { Component } from 'react';
import Smurfs from './Smurfs';
// import Header from './components/Header';
import axios from 'axios';
import './SmurfForm.css';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.addSmurfs()
  }

  addSmurfs = () => {
   axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data }))
    .catch(err => console.log(err)) 
  }

  handleInputChange = (event) => { this.setState({[event.target.name]: event.target.value}) }

  buttonSubmit = () => {
    const { name, age, height, id } = this.state
    axios.post('http://localhost:3333/smurfs', { name, age, height, id })
      .then( (response) => {
        this.setState({ smurfs: response.data, name: '', age: '', height: '', id: '' })
      })
  }

  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <br />
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Enter name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter age"
            value={this.state.age}
            name="age"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter height"
            value={this.state.height}
            name="height"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter id"
            value={this.state.id}
            name="id"
          />
          <button type="submit" onClick={this.buttonSubmit}>Add to the village</button>
        </form>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default SmurfForm;