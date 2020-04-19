import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Headers from "./components/header";

ReactDOM.render(
    <BrowserRouter>
        <Headers />
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
