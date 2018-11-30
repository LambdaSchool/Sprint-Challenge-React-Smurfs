import React, { Component } from 'react';

import { Route, NavLink } from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editSmurf:{},
    };
  }
//axios requests -------
componentDidMount(){
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({ 
        smurfs: response.data 
      });
    })
    .catch(err => {
      console.log(err);
    });
}

addToList = (obj) => {
  axios.post('http://localhost:3333/smurfs', obj)
  .then(response => {
    this.setState({
      smurfs: response.data
    })
  })
  .catch(err => console.log(err))
}

deleteItem = id => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data
      });
    })
    .catch(err => console.log(err));
};

updateToList = (id, obj) => {
  console.log(id);
  this.setState({
    editSmurf: {}
  })
  axios 
    .put(`http://localhost:3333/smurfs/${id}`, obj)
    .then(response => {
      console.log(id);
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
}

//functions

updateStart = (obj) =>{
  this.setState({
    editSmurf: obj
  })
  console.log(this.state.editSmurf)
}

editReset = () =>{
  this.setState({
    editSmurf: {}
  })
}

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    let { name, id } = this.state.editSmurf;
    return (
      <div className="App">
        <nav>
          <NavLink to='/' onClick={()=>console.log('onclick')}>Village</NavLink>
          <NavLink to={'/smurf-form/' + (name ? `${id}` : '')}>Form</NavLink>
        </nav>
        <Route
          exact path="/"
          render={(props) => 
          <Smurfs 
            {...props} 
            smurfs={this.state.smurfs} 
            deleteItem={this.deleteItem} 
            updateStart={this.updateStart} 
            editReset={this.editReset} />}
        />
        <Route
          path="/smurf-form"
          render={(props) => 
          <SmurfForm 
          {...props} 
          addToList={this.addToList} 
          updateToList={this.updateToList} 
          editSmurf={this.state.editSmurf} />}
        />
        
        
      </div>
    );
  }
}

export default App;
