import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHeader from "./Components/NavHeader";
import HomePage from "./Pages/Home/index";
import SingleAlbum from "./Pages/SingleAlbum";

export default function Routes() {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/albums/:id">
          <SingleAlbum />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
