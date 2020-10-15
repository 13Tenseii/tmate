import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import DropdownOption from "./dropdown/DropdownOption";
import Dropdown from "./dropdown/Dropdown";
import Language from "../../i18n/Language";
import {i18n} from "i18next";
import {getI18n} from "react-i18next";

@Template(function (this: LangDropdown) {
    return (
        <div className="Lang-picker">
            <Dropdown
                options={this.options}
                onOptionChange={this.onChange}
                selectedOption={this.options.find(it => it.value == this.i18n.language)}/>
        </div>
    )
})
class LangDropdown extends ReactComponent<any, any> {
    private readonly options: DropdownOption[];
    private i18n: i18n;

    constructor(props: any) {
        super(props);
        this.i18n = getI18n();
        this.options = Language.getLangs().map(it => {
            return new DropdownOption(`lang_${it.value}`, it.value);
        });
        this.onChange = this.onChange.bind(this);
    }

    private onChange(option: DropdownOption): void {
        this.i18n.changeLanguage(option.value);
    }


    protected getClassName(): string {
        return LangDropdown.name;
    }
}

export default LangDropdown;