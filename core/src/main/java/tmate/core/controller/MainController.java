package tmate.core.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tmate.core.dto.GameStats;
import tmate.core.enums.Game;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
public class MainController {

    @ResponseBody
    @GetMapping(value = "/info-games-stats")
    public List<GameStats> getInfoGamesStats() {
        return Arrays.stream(Game.values()).map(it -> new GameStats(
                it.getId(), it.name(), (long) (Math.random() * 100000)))
                .collect(Collectors.toList());
    }
}
