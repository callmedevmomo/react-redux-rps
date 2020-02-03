import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Play from "../Routes/Play";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Play} />
    </>
  </Router>
);
