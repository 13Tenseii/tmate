import ReactDOM from "react-dom";
import React from "react";
import App from "../js/App";
import i18n from "./i18n.js";

i18n.changeLanguage(navigator.language.split('-')[0]) // en-US -> en
const rootEl = document.getElementById('root');
ReactDOM.render(
    <App/>,
    rootEl
);