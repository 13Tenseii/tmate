import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import {withTranslation} from "react-i18next";
import AppProps from "./AppProps";
import LangDropdown from "./LangDropdown";

@Template(function (this: Header) {
    return (
        <div className="Header" id={this.getBlockName()}>
            <div className="Header__content">
                <a className="Header__login">{this.props.t('login')}</a>
                <a className="Header__logo"/>
                <a className="Header__register">{this.props.t('register')}</a>
            </div>
            <LangDropdown/>
        </div>
    )
})
class Header extends ReactComponent<AppProps, any> {
    protected getClassName(): string {
        return Header.name;
    }
}

export default withTranslation()(Header);