import React from "react";
import ReactDOM from "react-dom";
import Navigator from "./components/navigator";
// import App from "./components/app";
import registerServiceWorker from "./components/registerServiceWorker";

ReactDOM.render(<Navigator />, document.getElementById("app"));
registerServiceWorker();
module.hot.accept();
