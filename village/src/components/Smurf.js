import React from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: []
    };
  }
  componentDidMount() {
    this.fetchSmurf(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchSmurf(newProps.match.params.id);
    }
  }

  fetchSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(res => {
        this.setState({ smurf: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // delete = id => {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ redirect: true });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <div className="Smurfs">
        {/* {this.state.redirect && <Redirect to="/smurfs" />} */}
        <div className="Smurfs__Smurf">
          <h3 className="Smurfs__name">
            {this.state.smurf[0]
              ? this.state.smurf[this.props.match.params.id].name
              : null}
          </h3>
          <strong className="Smurfs__height">
            {this.state.smurf[0]
              ? this.state.smurf[this.props.match.params.id].height
              : null}{" "}
            tall
          </strong>
          <p className="Smurfs__age">
            {this.state.smurf[0]
              ? this.state.smurf[this.props.match.params.id].age
              : null}{" "}
            smurf years old
          </p>
          <span className="icons">
            <i className="far fa-edit" />
            <i className="far fa-trash-alt" />
          </span>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
