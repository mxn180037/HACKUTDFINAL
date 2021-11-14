import React, { Component } from "react";
import logo from "../utd.jpeg";
import pic from "../backg.jpeg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUser(e) {
    this.setState({ username: e.target.value });
  }
  onChangePass(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username === "aa407" && this.state.password === "password") {
      this.props.history.push("/profile");
    }
  }
  render() {
    return (
      <div>
        <div>
          <div
            className="home-content p-5"
            style={{ backgroundImage: `url(${pic})`, height: 660 }}
          >
            <div className="intro container text-center text-light">
              <h1 className="title">WELCOME TO SOCIAL BUTTERFLY</h1>
              <h2
                className="sub-title mb-4"
                style={{ marginTop: 20, color: "black" }}
              >
                Find your community anywhere you go :)
              </h2>
            </div>
          </div>
        </div>

        <div className="form-box">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={this.state.username}
                onChange={this.onChangeUser}
              />
            </div>

            <div className="form-group" style={{ marginTop: 20 }}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChangePass}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.onSubmit}
              style={{ marginTop: 20 }}
            >
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
