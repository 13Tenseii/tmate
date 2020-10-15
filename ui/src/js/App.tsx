import React from "react";
import Template from "./react/common/ReactUtil";
import RestApi from "./api/RestApi";
import ReactComponent from "./react/common/ReactComponent";
import MainView from "./view/MainView";
import {withTranslation} from "react-i18next";

@Template(function (this: App) {
    return (
        <div id={this.getBlockName()}>
            <MainView/>
        </div>
    )
})
class App extends ReactComponent<any, State> {
    constructor(props: any) {
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

interface State {
    test?: string
}

export default withTranslation()(App);