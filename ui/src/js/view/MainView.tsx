import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import Header from "../component/common/Header";
import GradientSection from "../component/main/GradientSection";
import InfoSection from "../component/main/InfoSection";
import Footer from "../component/common/Footer";


@Template(function (this: MainView) {
    return (
        <div className="Main-view" id={this.getBlockName()}>
            <Header/>
            <GradientSection/>
            <InfoSection/>
            <Footer/>
        </div>
    )
})
class MainView extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    protected getClassName(): string {
        return MainView.name;
    }
}

interface Props {}

interface State {}

export default MainView;