import React from "react";
import Template from "./util/ReactUtil";

@Template(function (this: App) {return (
    <div id="app">
        {this.test}
    </div>
)})
class App extends React.Component {
    private test: string = 'testingPurp';
    constructor(props) {
        super(props);
        // this.render = () => {return <div id="app">
        //     {this.test}
        // </div>}
    }
}

export default App;