import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());
const stringify = JSON.stringify;

const fetchQuery = async (operation, variables) => {
  const res = await fetch(`/_graphql?db=${localStorage.corexStore}`, {
    mode: "cors",
    credentials: "omit",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.token || ""}`
    },
    body: stringify({
      query: operation.text,
      variables: variables
    })
  });
  return await res.json();
};

const getOperation = reference =>
  import(
    /* webpackChunkName: "[request]" */ `./graphql/__generated__/${reference}`
  );

const network = Network.create(fetchQuery);
const environment = new Environment({
  store,
  network,
  operationLoader: {
    async get(reference) {
      return await getOperation(String(reference));
    },
    load(reference) {
      return getOperation(String(reference));
    }
  }
});

export default environment;
