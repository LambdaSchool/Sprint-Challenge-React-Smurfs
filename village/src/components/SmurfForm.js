import React, { Component } from 'react';
import Axios from 'axios';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf(event) {
    event.preventDefault();
    Axios.post('http://localhost:3333/smurfs', this.state)
      .then(response => {
        console.log('response from post', response);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        this.props.onCreate();
      })
      .catch(error => {
        console.log('error posting the data');
      });  
  };

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

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf.bind(this)}>
          <input
            onChange={this.updateName.bind(this)}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge.bind(this)}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight.bind(this)}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;