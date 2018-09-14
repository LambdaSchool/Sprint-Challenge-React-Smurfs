import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
      };
  }

  componentDidMount=()=> {
    axios
    .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: [...response.data] });
      })
      .catch(err => console.log(err));
  }

  handleCreateOrUpdate = () => {
    axios
      .post('http://localhost:3333/smurfs')
        .then(response => {
          this.setState({ smurfs: response.data });
        })
        .catch(err => console.log(err));
  }

  handleDelete=(event, beingDeleted)=>{
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${beingDeleted.id}`, beingDeleted)
              .then(response => {
                     this.setState({ smurfs: [...response.data]
                                  });
                  })
              .catch(err => console.log(err));
  }

  // handleUpdate


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink  exact
                  to="/"
                  className="link list-link"
                  activeClassName="activeNavButton">Smurf List</NavLink>
        <NavLink  to="smurf-form"
                  className="link form-link"
                  activeClassName="activeNavButton">Add Smurf</NavLink>
        <Route  exact
                path="/"
                render={props =>  
                        <Smurfs {...props}
                                smurfs={this.state.smurfs}
                                handleCreateOrUpdate={this.handleCreateOrUpdate} 
                                handleDelete={this.handleDelete}/> } />
        <Route  path="/smurf-form"
                render={props => <SmurfForm {...props}
                                            smurfs={this.smurfs}
                                            handleCreateOrUpdate={this.handleCreateOrUpdate}
                                            componentDidMount={this.componentDidMount} /> } />
      </div>
    );
  }
}

export default App;
