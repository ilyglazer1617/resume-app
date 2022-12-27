import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./home";
import ResumeApp from "./resumeApp";
class Dev extends Component {
  state = {
    gender: "m",
  };
  render() {
    return (
      <Routes>
        <Route
          path="/start2/*"
          element={<ResumeApp gender={this.state.gender} />}
        />
        <Route path="/" element={<Home handleGender={this.handleGender} />} />
      </Routes>
    );
  }
  handleGender = (g) => {
    let gender = g;
    this.setState({ gender });
  };
}

export default Dev;
