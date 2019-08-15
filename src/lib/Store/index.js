import { parse } from "query-string";
import query from "../graphql/Store";
import React, { useRef } from "react";
import environment from "../environment";
import { QueryRenderer } from "react-relay";

const Store = props => {
  const { match, history, location, device, render: Render = null } = props;
  const searchParams = parse(location.search) || {};
  const params = match.params;
  const productID = params.productID;
  const category = params.category;
  const searchTerm = (category === "busqueda" && params.family) || "";

  let filters;

  try {
    filters = JSON.parse(searchParams.filters || "[]");
  } catch (e) {
    console.trace(e);
    filters = [];
  }

  const initialVariables = useRef({
    query: searchTerm || null,
    ssid: localStorage.ssid,
    product: productID || null,
    first: Number(searchParams.first || 20),
    templateuri: location.pathname
  });

  if (!Render)
    throw new Error("No render method defined in <StoreInterface />");

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ ...initialVariables.current, filters }}
      render={({ error, props }) => {
        return (
          <Render
            data={props}
            match={match}
            error={error}
            device={device}
            history={history}
            location={location}
          />
        );
      }}
    />
  );
};

export default Store;
