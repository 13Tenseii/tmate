import React from "react";
import Template from "./util/ReactUtil";

@Template(function (_this: App) {return (
    <div id="app">
        {_this.test}
    </div>
)})
class App extends React.Component {
    private test: string = 'testingPurp';

}

export default App;