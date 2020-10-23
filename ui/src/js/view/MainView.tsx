import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import Header from "../component/common/Header";
import GradientSection from "../component/main/GradientSection";
import Footer from "../component/common/Footer";
import InfoSectionParts from "../component/main/InfoSectionParts";


@Template(function (this: MainView) {
    return (
        <div className="Main-view" id={this.getBlockName()}>
            <Header/>
            <GradientSection/>
            <InfoSectionParts/>
            <Footer/>
        </div>
    )
})
class MainView extends ReactComponent<any, any> {

    protected getClassName(): string {
        return MainView.name;
    }
}

export default MainView;