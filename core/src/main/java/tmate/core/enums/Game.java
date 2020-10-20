package tmate.core.enums;

public enum Game {

    DOTA2(0),
    LEAGUE_OF_LEGENDS(1),
    COUNTER_STRIKE_GO(2),
    PUBG(3),
    WARZONE(4),
    FORTNITE(5);

    private Long id;

    Game(int id) {
        this.id = (long) id;
    }

    public Long getId() {
        return id;
    }
}
