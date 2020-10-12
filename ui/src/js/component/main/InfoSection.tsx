import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";


@Template(function (this: InfoSection) {
    return (
        <div className="Info-section" id={this.getBlockName()}>

        </div>
    )
})
class InfoSection extends ReactComponent<any, any> {
    protected getClassName(): string {
        return InfoSection.name;
    }
}

export default InfoSection;