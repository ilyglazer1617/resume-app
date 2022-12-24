import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./home";
import ResumeApp from "./resumeApp";
class Dev extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route path="/start2" element={<ResumeApp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

export default Dev;
