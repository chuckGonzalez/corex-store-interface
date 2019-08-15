import React from "react";
import { render } from "react-dom";
import StoreInterface, { environment } from "./lib";
import manifest from "./manifest.json";

const App = () => (
  <StoreInterface
    manifest={manifest}
    render={({ match, history, location, device, data, error }) => {
      console.log({
        match,
        history,
        location,
        device,
        data,
        error,
        environment
      });
      return <div>Hello world!</div>;
    }}
  />
);

render(<App />, document.getElementById("root"));
