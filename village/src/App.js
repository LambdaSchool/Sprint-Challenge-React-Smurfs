import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Link } from 'react-router-dom';

const url = "http://localhost:3333/smurfs"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios.get(url)
      .then(res => {
        this.setState({smurfs:res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }
  addSmurf = event => {
    event.preventDefault();
    
    const newSmurf = {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age,
    };
      axios
        .post(url, newSmurf)
        .then(response => {
          this.setState({
            smurfs: response.data
          });
        })
        .catch(err => console.log(err));
    };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props..
  render() {
    return (
      <div className="App">
      
        <Route exact path="/" component={Home} />
        <Route 
        path="/smurfs"
        render ={props =>
        <Smurfs 
        {...props} 
        smurfs={this.state.smurfs}
        />
        }/>
         <Route 
        path="/smurfs/add"
        render ={props =>
        <SmurfForm 
          {...props}
           handleAddSmurf={this.state.addSmurf}
           handleInputChange={this.state.handleInputChange}
           value={this.state.smurfs}
           />
        }/>
      </div>
    );
  }
}
const Home = () => {
  return (
    <div className="home">
      <Link to="/smurfs"> List Of Smurfs </Link>
      <Link to="/smurfs/add"> Add Smurfs </Link>
    </div>
  )
}
export default App;
