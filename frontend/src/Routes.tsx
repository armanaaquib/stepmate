import React, { ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Todo from "./todo/components/Todo";

const Routes = (): ReactElement => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/todo" />
    </Route>
    <Route path="/todo">
      <Todo />
    </Route>
  </Switch>
);

export default Routes;
