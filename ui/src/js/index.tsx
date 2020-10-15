import ReactDOM from "react-dom";
import React from "react";
import App from "../js/App";
import i18n from "./i18n.js";
import {I18nextProvider} from "react-i18next";

// set actually lang to i18n
i18n.changeLanguage(navigator.language.split('-')[0]) // en-US -> en

const rootEl = document.getElementById('root');
ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App/>
    </I18nextProvider>,
    rootEl
);