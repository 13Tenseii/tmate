import ReactDOM from "react-dom";
import React from "react";
import App from "../js/App";
import i18n from "./i18n";
import {I18nextProvider} from "react-i18next";

const rootEl = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    rootEl
);