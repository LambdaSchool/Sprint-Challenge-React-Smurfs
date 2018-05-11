import React, { Component } from 'react';
import './App.css';
// import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      id: '',
      name: '',
      age: '',
      height: ''
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
    const { id, name, age, height } = this.state
    axios.post('http://localhost:3333/smurfs', { id, name, age, height })
      .then( (response) => {
        this.setState({ smurfs: response.data, id: '', name: '', age: '', height: '' })
      })
  }

  render() {
    return (

      <div>
        <div className="App-navigation-top">
          <Link to="/">Home</Link>
          <Link to="/Smurfs">Smurfs</Link>
        </div>
        <div className="App-navigation-bottom">  
          {/* <Route path="/Mac" render={(props) => <Mac {...props} mac={this.state.forMac}> } /> */}
          <Route exact path="/" component={Home} />
          <Route path="/Smurfs" component={Smurfs} />
        </div>
      </div>      

      <div className="App">
        <br />
        <form onSubmit={this.addSmurf}>
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Enter id"
            value={this.state.id}
            name="id"
          />
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
          <button type="submit" onClick={this.buttonSubmit}>Add to the village</button>
        </form>

        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
