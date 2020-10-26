import ReactComponent from "../../../react/common/ReactComponent";
import {withTranslation} from "react-i18next";
import Template from "../../../react/common/ReactUtil";
import React from "react";
import AppProps from "../../common/AppProps";


@Template(function (this: ExampleWorkSectionPart) {
    return (
        <div className="Info-section__work-section Example-work-section" id={this.getBlockName()}
             data-aos="zoom-out-down" data-aos-duration="2000">
            <div className="Example-work-section__content">
                <div className="Example-work-section__img"/>
                <div className="Example-work-section__text">
                    <div className="Example-work-section__text__description-header">
                        {this.props.t('work_example_header')}
                        <div className="Example-work-section__text__description">
                            {this.props.t('work_example_description')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
class ExampleWorkSectionPart extends ReactComponent<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    protected getClassName(): string {
        return ExampleWorkSectionPart.name;
    }
}

interface Props extends AppProps {

}

export default withTranslation()(ExampleWorkSectionPart);