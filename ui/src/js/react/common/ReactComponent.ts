import React from "react";

abstract class ReactComponent<P, S> extends React.Component<P, S> {

    constructor(props: P) {
        super(props);
        this.state = {} as S;
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