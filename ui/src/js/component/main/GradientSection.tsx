import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import AppProps from "../common/AppProps";
import {withTranslation} from "react-i18next";


@Template(function (this: GradientSection) {
    return (
        <div className="Gradient-section" id={this.getBlockName()}>
            <div className="Gradient-section__join-btn Join-btn">
                {this.props.t('join')}
            </div>
        </div>
    )
})
class GradientSection extends ReactComponent<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    protected getClassName(): string {
        return GradientSection.name;
    }
}

interface Props extends AppProps {

}

export default withTranslation()(GradientSection);