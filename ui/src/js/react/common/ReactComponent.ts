import React from "react";
import {getI18n} from "react-i18next";
import {i18n} from "i18next";

abstract class ReactComponent<P, S> extends React.Component<P, S> {
    protected i18n: i18n;

    constructor(props: P) {
        super(props);
        this.state = {} as S;
        this.i18n = getI18n();
    }

    protected abstract getClassName(): string;

    protected getBlockName(): string {
        return this.getKebabCaseBlockName(this.getClassName());
    }

    private getKebabCaseBlockName(name: string): string {
        return name.split(/(?=[A-Z])/)
            .reduce((prev: string, curr: string) => prev.concat('-').concat(curr));
    }
}

export default ReactComponent;