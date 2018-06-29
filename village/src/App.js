import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import SmurfDetails from './components/SmurfDetails'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: ''
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        this.setState({ smurfs: res.data })
      })
      .catch((error) => console.error(error))
  }

  addSmurf = (event) => {
    event.preventDefault()
    const smurf = {}
    smurf.name = this.state.name
    smurf.age = this.state.age
    smurf.height = this.state.height
    console.log('adding a smurf')

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then((res) => {
        this.setState({ smurfs: res.data })
        this.setState({
          name: '',
          age: '',
          height: ''
        })
        console.log(`smurfs: ${this.state.smurfs}`)
      })
      .catch((error) => console.error(error))
  }

  updateSmurfState = (smurfs) => {
    this.setState({ smurfs })
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    })
  }

  deleteSmurf = (event) => {
    const id = event.target.value
    const endpoint = `http://localhost:3333/smurfs/${id}`
    axios
      .delete(endpoint)
      .then((res) => {
        this.setState({ smurfs: res.data })
      })
      .catch((error) => console.error(error))
  }

  updateSmurf = (event) => {
    event.preventDefault()
    const id = event.target.value
    const endpoint = `http://localhost:3333/smurfs/${id}`
    const smurf = {}
    smurf.name = this.state.name
    smurf.age = Number(this.state.age)
    smurf.height = Number(this.state.height)
    axios
      .put(endpoint, smurf)
      .then((res) => {
        this.setState({ smurfs: res.data })
      })
      .catch((error) => console.error(error))
  }

  findSmurf = (id) => {
    return this.state.smurfs.find((smurf) => smurf.id === Number(id))
  }

  render () {
    return (
      <div className='App'>
        <SmurfForm
          addSmurf={this.addSmurf}
          updateName={this.updateName}
          updateAge={this.updateAge}
          updateHeight={this.updateHeight}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
        />
        <Route
          exact
          path='/'
          render={() => (
            <Smurfs
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
        <Route
          path='/smurfs/:id'
          render={(props) => (
            <SmurfDetails smurf={this.findSmurf(props.match.params.id)} />
          )}
        />
      </div>
    )
  }
}

export default App
