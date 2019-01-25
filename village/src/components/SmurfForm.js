import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    if( this.props.updateForm === true) {
      this.setState({
        name: this.props.smurfToUpdate.name,
        age: this.props.smurfToUpdate.age,
        height: this.props.smurfToUpdate.height
      })
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  componentDidUpdate(prevProps) {
    if( this.props.updateForm === false && prevProps.updateForm === true){
      this.clearInputs();
    }
  }

  establishSmurf = () => {
    return {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.establishSmurf())
    this.clearInputs();
    this.props.history.push('/');
  }

  deleteSmurf = () => {
    this.props.deleteSmurf(this.props.smurfToUpdate.id);
    this.props.history.push('/');
  }

  updateSmurf = (ev) => {
    ev.preventDefault();
    this.props.updateSmurf(this.establishSmurf());
    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      {this.props.updateForm ? 
        <p className="form-title">Update a Smurf</p>
        : 
        <p className="form-title">Add a Smurf</p>
      }
        <form onSubmit={this.props.updateForm ? this.updateSmurf : this.addSmurf}>
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
          {this.props.updateForm ? 
            <div className='form-btn-holder'>
            <button type="submit">Update Info</button>
            <button onClick={this.deleteSmurf}>Delete</button>
            </div>
          :
            <div className='form-btn-holder'>
            <button type="submit">Add to the village</button>
            </div>
          }        
        </form>
      </div>
    );
  }
}

export default SmurfForm;
