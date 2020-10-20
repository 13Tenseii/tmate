export default class Language {
    public static readonly EN = new Language("en");
    public static readonly RU = new Language("ru");

    constructor(public value: string) {}

    public static getLangs(): Language[] {
        return [this.EN, this.RU];
    }
}