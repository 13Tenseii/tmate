import ReactComponent from "../../../react/common/ReactComponent";
import Template from "../../../react/common/ReactUtil";
import React from "react";
import DropdownOption from "./DropdownOption";
import {i18n} from "i18next";
import {getI18n} from "react-i18next";


@Template(function (this: Dropdown) {
    return (
        <div className="Dropdown" id={this.getBlockName()}>
            <div className="Dropdown__btn" onClick={this.hideAndShow}>
                <span>
                    {this.state.selectedOption
                        ? this.i18n.t(this.state.selectedOption.bundleName)
                        : this.i18n.t('select')}
                </span>
                <i className={`fas fa-sort-${this.state.isDropped ? 'up' : 'down'}`}/>
            </div>
            <div className={`Dropdown__menu ${this.state.isDropped ? 'Dropdown__menu__active' : ''}`}>
                {this.props.options
                    .map(it =>
                        <span className="Dropdown__menu__item"
                              key={it.value}
                              onClick={() => this.onItemSelect(it)}>
                            {this.i18n.t(it.bundleName)}
                        </span>
                    )}
            </div>
        </div>
    )
})
class Dropdown extends ReactComponent<Props, State> {
    private i18n: i18n;

    constructor(props: Props) {
        super(props);
        this.i18n = getI18n();
        this.state = {
            isDropped: false,
            filteredOptions: this.props.options,
            selectedOption: this.props.selectedOption ? this.props.selectedOption : null
        }
        this.hideAndShow = this.hideAndShow.bind(this);
        this.onItemSelect = this.onItemSelect.bind(this);
        this.getSelected = this.getSelected.bind(this);
    }

    private hideAndShow(): void {
        this.setState({isDropped: !this.state.isDropped})
    }

    private onItemSelect(option: DropdownOption) {
        this.setState({
            selectedOption: option,
            isDropped: false
        });
        this.props.onOptionChange(option);
    }

    public getSelected(): DropdownOption {
        return this.state.selectedOption;
    }

    protected getClassName(): string {
        return Dropdown.name;
    }
}

interface Props {
    options: DropdownOption[],
    onOptionChange: (option: DropdownOption) => any,
    selectedOption?: DropdownOption,
    isSearchable?: boolean
}

interface State {
    isDropped: boolean,
    filteredOptions: DropdownOption[],
    selectedOption?: DropdownOption
}

export default Dropdown;