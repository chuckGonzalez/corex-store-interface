import React from "react";
import { render } from "react-dom";
import StoreInterface, { environment, graphqlArtifacts } from "./lib";
import styles from "./styles";
import manifest from "./manifest.json";

const App = () => (
  <StoreInterface
    styles={styles}
    manifest={manifest}
    render={({ match, history, location, device, data, error }) => {
      console.log({
        match,
        history,
        location,
        device,
        data,
        error,
        environment,
        graphqlArtifacts
      });
      return <div className="bg-red">Hello world!</div>;
    }}
  />
);

render(<App />, document.getElementById("root"));
