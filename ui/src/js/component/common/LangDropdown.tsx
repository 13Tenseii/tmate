import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import DropdownOption from "./dropdown/DropdownOption";
import Dropdown from "./dropdown/Dropdown";
import Language from "../../enums/Language";
import AppProps from "./AppProps";
import {withTranslation} from "react-i18next";

@Template(function (this: LangDropdown) {
    return (
        <div className="Lang-dropdown">
            <Dropdown
                options={this.options}
                onOptionChange={this.onChange}
                selectedOption={this.options.find(it => it.value == this.props.i18n.language)}/>
        </div>
    )
})
class LangDropdown extends ReactComponent<Props, any> {
    private readonly options: DropdownOption[];

    constructor(props: Props) {
        super(props);
        this.options = Language.getLangs().map(it => {
            return new DropdownOption(`lang_${it.value}`, it.value);
        });
        this.onChange = this.onChange.bind(this);
    }

    private onChange(option: DropdownOption): void {
        this.props.i18n.changeLanguage(option.value);
    }

    protected getClassName(): string {
        return LangDropdown.name;
    }
}

interface Props extends AppProps {

}

export default withTranslation()(LangDropdown);