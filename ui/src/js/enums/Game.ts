export default class Game {
    public static readonly DOTA2 = new Game(0, "dota2", "dota-logo.png");
    public static readonly LEAGUE_OF_LEGENDS = new Game(1, "lol", "lol-logo.png");
    public static readonly COUNTER_STRIKE_GO = new Game(2, "cs_go", "cs-go-logo.png");
    public static readonly PUBG = new Game(3, "pubg", "pubg-logo.png");
    public static readonly WARZONE = new Game(4, "warzone", "warzone-logo.png");
    public static readonly FORTNITE = new Game(5, "fortnite", "fortnite-logo.png");

    constructor(public id: number,
                public bundleName: string,
                public logoFileName: string) {}

    public static findById(id: number): Game {
        return Object.getOwnPropertyNames(Game)
            .map(propName => {
                let game = Game[propName];
                if (game instanceof Game && game.id == id)
                    return game;
            }).find(it => it != undefined);
    }
}