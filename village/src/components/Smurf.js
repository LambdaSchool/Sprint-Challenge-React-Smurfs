import React, { Component } from 'react';

class Smurf extends Component {
  state = {
    name: '',
    height: '',
    age: '',
  };

  // setInputVal
  setInputVal = e => {
    this.setState({ [ e.target.name ]: e.target.value });
  }
  
  // editSmurf
  editSmurf = e => {
    const siblings =  [ ...e.target.parentNode.children ];
    const editButton = e.target;
    const saveButton = siblings.find(el => el.classList.contains('save-edit-smurf'));
    
    // name    
    const name = siblings.find(el => el.classList.contains('smurf__name'));
    const nameInput = siblings.find((el, i) => el.classList.contains('smurf__smurf-name-input'));
    // height
    const height = siblings.find(el => el.classList.contains('smurf__height'));
    const heightInput = siblings.find(el => el.classList.contains('smurf__smurf-height-input'));
    // age
    const age = siblings.find(el => el.classList.contains('smurf__age'));
    const ageInput = siblings.find(el => el.classList.contains('smurf__smurf-age-input'));
    
    editButton.setAttribute('hidden', '');
    saveButton.removeAttribute('hidden');
    
    // name actions
    name.setAttribute('hidden', '');
    nameInput.removeAttribute('hidden');
    nameInput.style.display = 'block';
    nameInput.style.margin = '0 auto';

    // height actions
    height.setAttribute('hidden', '');
    heightInput.removeAttribute('hidden');
    heightInput.style.display = 'block';
    heightInput.style.margin = '0 auto';
    
    // age actions
    age.setAttribute('hidden', '');
    ageInput.removeAttribute('hidden');
    ageInput.style.display = 'block';
    ageInput.style.margin = '0 auto';
  }

  // saveEditSmurf
  saveEditSmurfPresentation = e => {
    const siblings =  [ ...e.target.parentNode.children ];
    const editButton = siblings.find(el => el.classList.contains('edit-smurf'));
    const saveButton = e.target;
    
    // name    
    const name = siblings.find(el => el.classList.contains('smurf__name'));
    const nameInput = siblings.find((el, i) => el.classList.contains('smurf__smurf-name-input'));
    // height
    const height = siblings.find(el => el.classList.contains('smurf__height'));
    const heightInput = siblings.find(el => el.classList.contains('smurf__smurf-height-input'));
    // age
    const age = siblings.find(el => el.classList.contains('smurf__age'));
    const ageInput = siblings.find(el => el.classList.contains('smurf__smurf-age-input'));
    
    editButton.removeAttribute('hidden');
    saveButton.setAttribute('hidden', '');
    
    // name actions
    name.removeAttribute('hidden');
    nameInput.setAttribute('hidden', '');
    nameInput.style.display = 'none';
    nameInput.style.margin = '0 auto';

    // height actions
    height.removeAttribute('hidden', '');
    heightInput.setAttribute('hidden', '');
    heightInput.style.display = 'none';
    heightInput.style.margin = '0 auto';
    
    // age actions
    age.removeAttribute('hidden');
    ageInput.setAttribute('hidden', '');
    ageInput.style.display = 'none';
    ageInput.style.margin = '0 auto';
  }

  // runSaveEditFunctions
  runSaveEditFunctions = e => {
    this.props.saveEditSmurf(this.props.id, this.state.name, this.state.age, this.state.height);
    this.saveEditSmurfPresentation(e);
  }
  
  // render
  render() {
    return (
      <div className="Smurf">
        {/* NAME */}
        <h3 className='smurf__name'>{this.props.name}</h3>
        <input
          className='smurf__smurf-name-input'
          name='name'
          onChange={ this.setInputVal }
          placeholder={ this.props.name }
          type='text'
          value={ this.state.name }
          hidden
        />
        
        {/* HEIGHT */}
        <strong className='smurf__height'>{this.props.height} tall</strong>
        <input
          className='smurf__smurf-height-input'
          name='height'
          onChange={ this.setInputVal }
          placeholder={ this.props.height }
          type='text'
          value={ this.state.height }
          hidden
        />
        
        {/* AGE */}
        <p className='smurf__age'>{this.props.age} smurf years old</p>
        <input
          className='smurf__smurf-age-input'
          name='age'
          onChange={ this.setInputVal }
          placeholder={ this.props.age }
          type='text'
          value={ this.state.age }
          hidden
        />

        {/* BUTTONS */}
        {/* editSmurf */}
        <button
          className='edit-smurf'
          onClick={ this.editSmurf }
        >
          Edit Smurf
        </button>

        {/* saveEditSmurf */}
        <button
          className='save-edit-smurf'
          onClick={ this.runSaveEditFunctions }
          hidden
        >
          Save Edit
        </button>
        
        {/* deleteSmurf */}
        <button
          className='delete-smurf'
          onClick={ () => this.props.deleteSmurf(this.props.id) }
        >
          Delete Smurf
        </button>
      </div>
    );
  }
};

export default Smurf;
