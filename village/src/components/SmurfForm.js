import React, { Component } from 'react';
import { Header, Segment, Form, Loader } from 'semantic-ui-react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: false,
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    // add a new smurf to the server
    const newSmurf = {...this.state};
    this.props.handleSubmit(newSmurf, this.state.id);

    // reset the state
    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  static getDerivedStateFromProps(props, state) {
    if (props.update && props.smurfs.length > 0 && !state.smurf){ 
      const smurf = props.smurfs.find( smurf => (
        smurf.id.toString() === props.match.params.id
      ));

      if (!smurf) {
        window.alert(`Cannot find a smurf with id ${props.match.params.id}`)
        props.history.push('/');
        return null;
      }

      return({
        smurf: true,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id,
      })
    }
    return null;
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Segment className="SmurfForm">
        <Header textAlign='center' as='h3'>{
          this.props.update? 
          `Update ${this.state.name}'s Info`:
          'Add a New Smurf'
          }</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Form.Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Form.Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className="ui two buttons">
            <Form.Button type="button" onClick={ () => this.props.history.push('/') }>Cancel</Form.Button>
            <Form.Button primary type="submit">{this.props.update ? 'Update' : 'Add'}</Form.Button>
          </div>
        </Form>
        {
          this.props.update && !this.state.smurf && <Loader active inline='centered' />
        }
      </Segment>
    );
  }
}

export default SmurfForm;
