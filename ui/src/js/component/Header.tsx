import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";

@Template(function (this: Header) {
    return (
        <div className="Header" id={this.getBlockName()}>
            <a className="Header__login">Log in</a>
            <a className="Header__logo"/>
            <a className="Header__register">Register</a>
        </div>
    )
})
class Header extends ReactComponent<any, any> {
    protected getClassName(): string {
        return Header.name;
    }

}

export default Header;