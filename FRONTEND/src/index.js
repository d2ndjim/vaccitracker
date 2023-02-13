import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./assets/css/index.css";
import "./assets/fonts/Gilroy/Gilroy-ExtraBold.otf";
import "./assets/fonts/Gilroy/Gilroy-Light.otf";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
