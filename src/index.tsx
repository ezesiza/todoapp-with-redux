import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "reactstrap";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
