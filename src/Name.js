import React, { Component } from "react";
export class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="m-5 p-5 name-input rounded ">
        <form className="form">
          <input
            onChange={this.changeHandler}
            placeholder="Enter your full name"
            className="form-control"
            name="name"
            required
          />
          <input
            onChange={this.changeHandler}
            placeholder="Password"
            className="form-control mt-2"
            name="password"
            required
          />
          <input
            type="button"
            className="btn btn-warning text-white"
            onClick={() =>
              this.props.enterName(this.state.name, this.state.password)
            }
            value="Start Quiz"
          />
        </form>
      </div>
    );
  }
}

export default Name;
