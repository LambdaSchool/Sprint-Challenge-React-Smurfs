import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {},
      showEditForm: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  handleData = (data) => {
    this.setState({smurfs: data})
  }

  deleteSmurf = id => {
    Axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      this.setState({smurfs: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  toggleEdit = () => {
    this.setState({showEditForm: !this.state.showEditForm});
  }

  componentDidMount() {
    Axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
      <SmurfForm submitSmurf={this.submitSmurf} handleData={this.handleData} />
      <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} handleData={this.handleData} toggleEdit={this.toggleEdit} showEdit={this.state.showEditForm}/>
      </div>
    );
  }
}

export default App;
