import Jsonable from "./Jsonable";

export default class Request implements Jsonable {
    private readonly args: any[];
    constructor(...args) {
        this.args = args;
    }

    public toJson(): Object | Object[] {
        return this.args;
    }
}