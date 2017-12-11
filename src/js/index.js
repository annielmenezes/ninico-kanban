import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "../css/style.css";
import App from "./components/app";
import todoApp from "./reducers";

const store = createStore(todoApp, applyMiddleware());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
