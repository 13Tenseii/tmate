import {render} from "react-dom";
import React from "react";


// no render function inside class needed, pass html template through function
export default function Template(template: Function) {
    return function<T extends { new (...args: any[]): {} }>(
        constructor: T
    ) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                let templateToInstance = template.bind(this);
                Object.defineProperty(this, 'render', {
                    value: () => {return templateToInstance()}
                })
            }
        }
    }
}
