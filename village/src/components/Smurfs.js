import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    constructor(props) {
      super(props);
      this.state = {
        smurfs: [],
        name: '',
        age: '',
        height: ''
      };
      this.addSmurf = this.addSmurf.bind(this);
      this.updateName = this.updateName.bind(this);
      this.updateAge = this.updateAge.bind(this);
      this.updateHeight = this.updateHeight.bind(this);
    }
  
    addSmurf(event) {
      event.preventDefault();
      const smurfs = this.state.smurfs
      // add code to create the smurf using the api
      axios
      .post("http://localhost:3333/smurfs", {name: this.state.name, age: this.state.age, height: this.state.height})
      .then(response => {{smurfs.push({name: this.state.name, age: this.state.age, height: this.state.height});
      this.setState({
        name: '',
        age: '',
        height: '',
        smurfs: smurfs
      });
      console.log(smurfs)
      // axios.get('http://localhost:5000/friends')
      // .post(reponse => {this.setState})
      
          }
          axios.get('http://localhost:3333/smurfs')
       .then(response => {
           this.setState({ smurfs: response.data });
       })    
      });
  }
  
    updateName(event) {
      this.setState({
        name: event.target.value
      });
    }
  
    updateAge(event) {
      this.setState({
        age: event.target.value
      });
    }
  
    updateHeight(event) {
      this.setState({
        height: event.target.value
      });
    }

  componentDidMount(){
  axios
  .get("http://localhost:3333/smurfs")
  // .then(response => response.data)
  .then(response =>{
    this.setState(() => {smurfs: response.data})
  })

 
  // .then(response => {
  //   this.setState(() => ({smurfs: response.data}));
  // })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
        <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Smurfs;