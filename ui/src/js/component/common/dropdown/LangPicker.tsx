import ReactComponent from "../../../react/common/ReactComponent";
import Template from "../../../react/common/ReactUtil";
import React from "react";

@Template(function (this: LangPicker) {
    return (
        <div className="Lang-picker">
            <div className="Lang-picker__dropdown">
                <div className="Lang-picker__drop-btn">

                    <i className={`fas fa-sort-${this.state.isDropped ? 'up' : 'down'}`}></i>
                </div>
                <div className="Lang-picker__dropdown__menu">
                    <span className="Lang-picker__dropdown__item">Item1</span>
                    <span className="Lang-picker__dropdown__item">Item2</span>
                    <span className="Lang-picker__dropdown__item">Item3</span>
                    <span className="Lang-picker__dropdown__item">Item4</span>
                </div>
            </div>
        </div>
    )
})
class LangPicker extends ReactComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isDropped: false
        }
    }

    protected getClassName(): string {
        return LangPicker.name;
    }
}

interface Props {

}

interface State {
    isDropped: boolean,
    selected:
}
export default LangPicker;