import React from "react";
import Template from "./react/common/ReactUtil";
import ReactComponent from "./react/common/ReactComponent";
import MainView from "./view/MainView";
import {withTranslation} from "react-i18next";
import AppProps from "./component/common/AppProps";

@Template(function (this: App) {
    return (
        <div id={this.getBlockName()}>
            <MainView/>
        </div>
    )
})
class App extends ReactComponent<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    protected getClassName(): string {
        return App.name;
    }
}

export default withTranslation()(App);