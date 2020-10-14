import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import LangPicker from "../common/dropdown/LangPicker";


@Template(function (this: GradientSection) {
    return (
        <div className="Gradient-section" id={this.getBlockName()}>
            <LangPicker/>
        </div>
    )
})
class GradientSection extends ReactComponent<any, any> {


    protected getClassName(): string {
        return GradientSection.name;
    }
}

export default GradientSection;