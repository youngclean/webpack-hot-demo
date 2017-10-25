import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

const render = Component => {
  ReactDOM.render(
      <Component />,
    document.getElementById("root")
  );
};

render(App);

// Webpack Hot Module Replacement API
// 一定要加
if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply hot update", err);
    }
  });
}
