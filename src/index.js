import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import Global from "./style/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Home /> <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
