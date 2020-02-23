import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Play from "../routes/play";
import Header from "./header/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Play} />
    </>
  </Router>
);
