import React from "react";
import useDevice from "usedevice";
import Store from "./Store";
import { Route, Switch } from "react-router-dom";

var App = function App(_ref) {
  var _ref$history = _ref.history,
      history = _ref$history === void 0 ? null : _ref$history,
      _ref$render = _ref.render,
      _render = _ref$render === void 0 ? null : _ref$render;

  var device = useDevice();
  return React.createElement(Switch, null, React.createElement(Route, {
    path: "/:category?/:family?/:line?/:productName?/:productID?",
    render: function render(props) {
      return React.createElement(Store, Object.assign({}, props, {
        history: history,
        device: device,
        render: _render
      }));
    }
  }));
};

export default App;