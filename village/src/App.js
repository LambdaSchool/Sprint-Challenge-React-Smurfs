import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link} from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

const Home = () => (
  <div>
    <p>Welcome to smurf-ville!</p>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
componentDidMount(){
axios
      .get('http://localhost:3333/smurfs')
	  .then(response => {
		  this.setState(() => ({smurfs: response.data}));
	  })
	  .catch(error => {
      console.error(error);
    });
}

  
  render() {
    return (
      <div className="App">
        <SmurfForm />
		<Router>
		<div>
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/smurfs">smurfs</Link></li>
		</ul>
		<Route exact path="/" component={Home} />
		<Route path="/smurfs" render={props => (
		<Smurfs {...props} smurfs={this.state.smurfs}/>
		)}/>
		</div>
		</Router>
        
      </div>
    );
  }
}

export default App;
