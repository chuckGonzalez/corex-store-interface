import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { parse } from "query-string";
import React, { useRef } from "react";
import { useQuery } from "relay-hooks";
import query from "../graphql/Store";

var Store = function Store(props) {
  var match = props.match,
      history = props.history,
      location = props.location,
      device = props.device,
      _props$render = props.render,
      Render = _props$render === void 0 ? null : _props$render;
  var searchParams = parse(location.search) || {};
  var params = match.params;
  var productID = params.productID;
  var category = params.category;
  var searchTerm = category === "busqueda" && params.family || "";
  var filters;

  try {
    filters = JSON.parse(searchParams.filters || "[]");
  } catch (e) {
    console.trace(e);
    filters = [];
  }

  var initialVariables = useRef({
    query: searchTerm || null,
    ssid: localStorage.ssid,
    product: productID || null,
    first: Number(searchParams.first || 20),
    templateuri: location.pathname
  });

  var _useQuery = useQuery({
    query: query,
    variables: _objectSpread({}, initialVariables.current, {
      filters: filters
    })
  }),
      data = _useQuery.props,
      error = _useQuery.error;

  if (!Render) throw new Error("No render method defined in <StoreInterface />");
  return React.createElement(React.Fragment, null, React.createElement(Render, {
    data: data,
    match: match,
    error: error,
    device: device,
    history: history,
    location: location
  }));
};

export default Store;