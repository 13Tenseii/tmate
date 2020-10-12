import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";


@Template(function (this: GradientSection) {
    return (
        <div className="Gradient-section" id={this.getBlockName()}>

        </div>
    )
})
class GradientSection extends ReactComponent<any, any> {


    protected getClassName(): string {
        return GradientSection.name;
    }
}

export default GradientSection;