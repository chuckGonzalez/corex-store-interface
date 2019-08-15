import { Environment, Network, RecordSource, Store } from "relay-runtime";
var store = new Store(new RecordSource());
var stringify = JSON.stringify;

var fetchQuery = function fetchQuery(operation, variables) {
  return fetch("/_graphql?db=".concat(localStorage.corexStore), {
    mode: "cors",
    credentials: "omit",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: "Bearer ".concat(localStorage.token || "")
    },
    body: stringify({
      query: operation.text,
      variables: variables
    })
  }).then(function (res) {
    return res.json();
  });
};

var network = Network.create(fetchQuery);
var environment = new Environment({
  network: network,
  store: store
});
export default environment;