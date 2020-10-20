export default class HttpMethod {
    public static readonly GET = new HttpMethod("GET");
    public static readonly POST = new HttpMethod("POST");
    public static readonly DELETE = new HttpMethod("DELETE");

    constructor(public value: string) {
        this.value = value;
    }

}