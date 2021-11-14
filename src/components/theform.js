import React, { Component } from "react";
import Select from "react-select";
//import Dropdown from "react-bootstrap/DropdownButton";
//import makeAnimated from 'react-select/animated';
import { colourOptions } from "./hobbiesData";

//const animatedComponents = makeAnimated();

export default class TheForm extends Component {
  render() {
    return (
      <form>
        <h3>My Information</h3>

        <div className="form-group">
          <label>Age</label>
          <input
            type="age"
            className="form-control"
            placeholder="Enter your age please"
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="age"
            className="form-control"
            placeholder="Please put Male, Female, or Other"
          />
        </div>

        <div className="form-group">
          <label>Do you want/have a pet?</label>
          <input
            type="age"
            className="form-control"
            placeholder="Please enter 'yes' or 'no'"
          />
        </div>

        <p> Please enter your hobbies </p>
        <Select
          closeMenuOnSelect={false}
          //components={animatedComponents}
          defaultValue={[colourOptions[21]]}
          isMulti
          options={colourOptions}
        />
      </form>
    );
  }
}
