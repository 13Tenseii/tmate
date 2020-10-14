import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";


@Template(function (this: Footer) {
    return (
        <div className="Footer" id={this.getBlockName()}>
            <div className="Footer__links">
                <a className="Footer__link">Link 1</a>
                <a className="Footer__link">Link 2</a>
                <a className="Footer__link">Link 3</a>
            </div>
            <div className="Footer__links">
                <a className="Footer__link">Link 1</a>
                <a className="Footer__link">Link 2</a>
                <a className="Footer__link">Link 3</a>
            </div>
        </div>
    )
})
class Footer extends ReactComponent<any, any> {
    protected getClassName(): string {
        return Footer.name;
    }
}

export default Footer;