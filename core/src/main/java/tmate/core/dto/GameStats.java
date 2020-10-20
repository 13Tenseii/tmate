package tmate.core.dto;

public class GameStats {

    public GameStats() {}

    public GameStats(Long gameId, String gameName, Long currPlayersOnline) {
        this.gameId = gameId;
        this.gameName = gameName;
        this.currPlayersOnline = currPlayersOnline;
    }

    private Long gameId;
    private String gameName;
    private Long currPlayersOnline;

    public Long getGameId() {
        return gameId;
    }

    public String getGameName() {
        return gameName;
    }

    public Long getCurrPlayersOnline() {
        return currPlayersOnline;
    }
}
