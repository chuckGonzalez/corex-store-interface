import React from "react";
import useDevice from "usedevice";
import Store from "./Store";
import { Route, Switch } from "react-router-dom";

const App = ({ history = null, render = null }) => {
  const device = useDevice();

  return (
    <Switch>
      <Route
        path="/:category?/:family?/:line?/:productName?/:productID?"
        render={props => {
          return (
            <Store
              {...props}
              history={history}
              device={device}
              render={render}
            />
          );
        }}
      />
    </Switch>
  );
};

export default App;
