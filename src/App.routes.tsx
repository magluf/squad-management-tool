import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import TeamForm from "./components/TeamForm/TeamForm";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/create-team" component={TeamForm} />
    <Route path="/edit-team/:id" component={TeamForm} />
  </Switch>
);

export default AppRoutes;
