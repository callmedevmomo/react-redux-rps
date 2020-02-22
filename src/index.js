import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import game from "./reducer";

let store = createStore(game);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
