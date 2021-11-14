import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import image from "../profile_pic.jpeg";
const profData = require("./profData");
profData.setName("Amy");
profData.setAbout(
  "I am a Junior Majoring in CS and I am minoring in Liberal Arts"
);
profData.setGoal(
  "I hope to find new friends that share my passion for music and coding!"
);
profData.setHobby("I love playing the guitar");

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeHobby = this.onChangeHobby.bind(this);
    this.onChangeAbout = this.onChangeAbout.bind(this);
    this.onChangeGoal = this.onChangeGoal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: profData.getName(),
      About: profData.getAbout(),
      Hobby: profData.getHobby(),
      Goal: profData.getGoal()
    };
  }
  onChangeName(e) {
    this.setState({ Name: e.target.value });
  }
  onChangeHobby(e) {
    this.setState({ Hobby: e.target.value });
  }
  onChangeAbout(e) {
    this.setState({ About: e.target.value });
  }
  onChangeGoal(e) {
    this.setState({ Goal: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    profData.setName(this.state.Name);
    profData.setGoal(this.state.Goal);
    profData.setAbout(this.state.About);
    profData.setHobby(this.state.Hobby);
  }

  render() {
    return (
      <div>
        <form className="form" onsubmit="return false">
          <h2 style={{ textAlign: "center" }}>Amira Sandy</h2>
          <img
            src={image}
            width="300"
            height="200"
            alt="UTD"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <h5 style={{ marginTop: 30 }}>Your Profile</h5>
          <label>Name</label>
          <input
            name="Name"
            value={this.state.Name}
            onChange={this.onChangeName}
          />
          <label>About Me</label>
          <textarea
            name="About Me"
            value={this.state.About}
            onChange={this.onChangeAbout}
            class="form-control input-lg"
          />
          <label>Favorite Hobby</label>
          <input
            name="Favorite Hobby"
            value={this.state.Hobby}
            onChange={this.onChangeHobby}
          />
          <label>Your Goal on this App</label>
          <textarea
            name="Your Goal on this App"
            value={this.state.Goal}
            onChange={this.onChangeGoal}
          />
          <button
            style={{ marginTop: 20 }}
            type="Submit"
            className="btn btn-primary btn-block"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
