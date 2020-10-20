import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import AppProps from "../common/AppProps";
import GameStats from "../../dto/mainview/GameStats";
import RestApi from "../../api/RestApi";
import {withTranslation} from "react-i18next";
import Game from "../../enums/Game";


@Template(function (this: InfoSection) {
    return (
        <div className="Info-section" id={this.getBlockName()}>
            <div className="Info-section__column-section Info-section__column-section-left">
                <div className="Info-section__about">
                    <ul className="Info-section__about-header">
                        <li>{this.props.t('platform_target_info')}</li>
                    </ul>
                    <ul className="Info-section__about__row-list">
                        <li className="Info-section__about__row">
                            {this.props.t('first_poss')}
                        </li>
                        <li className="Info-section__about__row">
                            {this.props.t('second_poss')}
                        </li>
                        <li className="Info-section__about__row">
                            {this.props.t('third_poss')}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Info-section__column-section Info-section__column-section-right">
                <div className="Info-section__games-stats">
                    <div className="Info-section__games-stats__column">
                        {this.state.currentGamesStats != null
                            ? this.getGameStatBlockPart(0, this.state.currentGamesStats.length / 2)
                            : null}
                    </div>
                    <div className="Info-section__games-stats__column"/>
                    <div className="Info-section__games-stats__column">
                        {this.state.currentGamesStats != null
                            ? this.getGameStatBlockPart(this.state.currentGamesStats.length / 2)
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
})
class InfoSection extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.refreshCurrentGameStats.bind(this);
        this.getGameStatBlockPart.bind(this);
    }

    componentDidMount() {
        this.refreshCurrentGameStats();
        setInterval(() => this.refreshCurrentGameStats(), 30000)
    }

    private refreshCurrentGameStats(): void {
        RestApi.getInfoGamesStats()
            .then(resp => {
                this.setState({
                    currentGamesStats: resp.data
                })
            })
    }

    private getGameStatBlockPart(from: number, to?: number) {
        const original = window.location.origin;
        let games = to ? this.state.currentGamesStats.slice(from, to) : this.state.currentGamesStats.slice(from);
        return games
            .map(it => {
                return (
                    <div className="Info-section__game-stat" key={it.gameId}>
                        <img className="Info-section__game-stat__logo"
                             src={`${original}/assets/games/${Game.findById(it.gameId).logoFileName}`}/>
                        <div className="Info-section__game-stat__info">
                            {`${this.props.t('curr_players_online')} | ${it.currPlayersOnline}`}
                        </div>
                        <i className="fas fa-arrow-circle-right Info-section__game-stat__join-btn"/>
                    </div>
                )
            })
    }

    protected getClassName(): string {
        return InfoSection.name;
    }
}

interface Props extends AppProps {

}

interface State {
    currentGamesStats: GameStats[]
}

export default withTranslation()(InfoSection);