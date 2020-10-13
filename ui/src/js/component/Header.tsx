import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import {useTranslation} from "react-i18next";

@Template(function (this: Header) {
    const {t, i18n} = useTranslation();
    return (
        <div className="Header" id={this.getBlockName()}>
            <a className="Header__login">{t("login")}</a>
            <a className="Header__logo"/>
            <a className="Header__register">{t("register")}</a>
        </div>
    )
})
class Header extends ReactComponent<any, any> {
    protected getClassName(): string {
        return Header.name;
    }

}

export default Header;