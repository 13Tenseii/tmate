import React from "react";
import Template from "./util/ReactUtil";
import RestApi from "./api/RestApi";

@Template(function (this: App) {return (
    <div id="app">
        {this.state}
    </div>
)})
class App extends React.Component {
    private test: string;
    constructor(props) {
        super(props);
        this.initProp();
    }

    private initProp(): void {
        // RestApi.getTest()
        //     .then(resp => this.test = resp.data.test)
        //     .catch(() => console.log("Error"));
        //
        this.setState({
            test: RestApi.getTest().then(resp => resp.data.test)
        });
    }

}

export default App;