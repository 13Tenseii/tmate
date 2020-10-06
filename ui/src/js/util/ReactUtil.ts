import {render} from "react-dom";
import React from "react";

export default function Template(template) {
    return function<T extends { new (...args: any[]): {} }>(
        constructor: T
    ) {
        return class extends constructor {
            render = () => {return template()}
        }
    }
}

// export default function Template(template) {
//     return (target) => {
//         target.prototype.render = () => {
//             return template
//         };
//         return target;
//     }
// }

// export default function Template(template: Function) {
//     return (target) => {
//         let obj = new target;
//         obj.render = () => {return template();};
//         return obj;
//     }
// }

// class ReactComponent extends React.Component {
//
//     protected template()
//
// }