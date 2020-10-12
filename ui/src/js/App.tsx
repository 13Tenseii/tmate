import React from "react";
import Template from "./react/common/ReactUtil";
import RestApi from "./api/RestApi";
import ReactComponent from "./react/common/ReactComponent";
import MainView from "./view/MainView";

@Template(function (this: App) {
    return (
        <div id={this.getBlockName()}>
            <MainView/>
        </div>
    )
})
class App extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        RestApi.getTest().then(resp => {
            this.setState({
                test: resp.data.test
            })
        });
    }

    protected getClassName(): string {
        return App.name;
    }
}

interface Props {}

interface State {
    test?: string
}

export default App;