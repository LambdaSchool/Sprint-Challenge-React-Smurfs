import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { StyledButton, StyledInput, Container } from '../Style';

const StyledForm = styled.form`
  width: 100%;
  padding: 20px 100px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  margin-bottom: 50px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;
const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      },
      isEditing: false,
      editID: '',
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post(`${this.props.url}/smurfs`, this.state.smurf)
      .then(({data}) => {
        this.props.updateSmurfs(data);
        this.props.history.push('/');
      })
      .catch(err => console.error(err));
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <StyledForm onSubmit={this.addSmurf}>
            <FormInputs>
                <StyledInput type="text" name="name" placeholder="Name" value={this.state.smurf.name} onChange={this.handleInputChange} autoComplete="off" required/>
                <StyledInput type="number" name="age" placeholder="Age" value={this.state.smurf.age} onChange={this.handleInputChange} autoComplete="off" required/>
                <StyledInput type="text" name="height" placeholder="Height" value={this.state.smurf.height} onChange={this.handleInputChange} autoComplete="off" required/>
            </FormInputs>
            <FormButtons>
                <StyledButton type="submit">{this.state.isEditing?'Update Smurf':'Add to Village'}</StyledButton>
            </FormButtons>
        </StyledForm>
      </Container>
    );
  }
}

export default SmurfForm;
