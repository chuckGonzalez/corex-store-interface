import App from "./App";
import Relay from "react-relay";
import environment from "./environment";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import React, { useState, useEffect } from "react";
import generator from "corex-theme-generator/runtime";

const history = createBrowserHistory();

/**
 * StoreInterface Component
 *
 * @name StoreInterface
 * @description Interface between UI and implementation logic
 *
 * @param {Object} params ReactComponent props
 * @param {Object} params.manifest Manifest file that defines storefront configuration
 * @param {StoreInterfaceRender} params.render Function of type ({routeProps, device, data, error}) => React.Node. The output of this function will be rendered by the StoreInterface.
 *
 * @example
 *
 *      <StoreInterface render={({match, history, location, device, data, error}) => {
 *        return <div>Hello world!</div>
 *      }} />
 *
 * @returns {React.Node} React.Node
 */

/**
 * @typedef {Function} StoreInterfaceRender
 *
 * @param {Objet} params ReactComponent props
 * @param {Object} params.match A match object contains information about how a <Route path> matched the URL. match objects contain the following properties: {params, isExact, path, url}
 * @param {Object} params.history The term “history” and "history object" in this documentation refers to the history package, which is one of only 2 major dependencies of React Router (besides React itself), and which provides several different implementations for managing session history in JavaScript in various environments.
 * @param {Object} params.location Locations represent where the app is now, where you want it to go, or even where it was.
 * @param {Object} params.device An object contains information about the client device and his capabilities.
 * @param {Object} params.data Object containing data obtained from the graphql query; the shape of this object will match the shape of the query. If this object is not defined, it means that the data is still being fetched.
 * @param {Object} params.error Error will be defined if an error has occurred while fetching the graphql query.
 */

function StoreInterface({ styles, render, manifest }) {
  const [css, setCss] = useState("");

  useEffect(() => {
    generator(styles)
      .generate()
      .then(css => setCss(css));
  }, [styles]);

  if (manifest && manifest.store) {
    localStorage.corexStore = manifest.store;

    return (
      <>
        <style>{css}</style>
        <Router history={history}>
          <App history={history} render={render} />
        </Router>
      </>
    );
  } else
    throw new Error(
      "A manifest configuration file is needed in order to render the frontstore"
    );
}

export { React, Relay, environment };

export default StoreInterface;
