import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/app";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
document.title = "FFP Calculator";
ReactDOM.render(
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);
