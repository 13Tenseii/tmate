import React from "react";
import ReactDOM from "react-dom";
import App from "./js/view/App";

export default function Template(template) {
    return (target) => {return template;};
}

const rootEl = document.getElementById('root');
ReactDOM.render(
    <App/>,
    rootEl
)