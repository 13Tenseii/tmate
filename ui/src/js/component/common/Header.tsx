import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";

@Template(function (this: Header) {
    return (
        <div className="Header" id={this.getBlockName()}>
            <a className="Header__login">{this.i18n.t("login")}</a>
            <a className="Header__logo"/>
            <a className="Header__register">{this.i18n.t("register")}</a>
        </div>
    )
})
class Header extends ReactComponent<any, any> {
    protected getClassName(): string {
        return Header.name;
    }

}

export default Header;