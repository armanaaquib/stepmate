import React, { ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import TodoApp from "./todo/TodoApp";

const Routes = (): ReactElement => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/todo" />
    </Route>
    <Route path="/todo">
      <TodoApp />
    </Route>
  </Switch>
);

export default Routes;
