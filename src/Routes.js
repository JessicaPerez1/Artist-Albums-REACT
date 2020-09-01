import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHeader from "./Components/NavHeader";
import HomePage from "./Pages/Home/index";
export default function Routes() {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/albums/:id">
          <h1>Albums</h1>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
