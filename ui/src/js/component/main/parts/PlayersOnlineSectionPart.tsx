import ReactComponent from "../../../react/common/ReactComponent";
import Template from "../../../react/common/ReactUtil";
import {withTranslation} from "react-i18next";
import React from "react";
import AppProps from "../../common/AppProps";
import GameStats from "../../../dto/mainview/GameStats";
import RestApi from "../../../api/RestApi";
import Game from "../../../enums/Game";


@Template(function (this: PlayersOnlineSectionPart) {
    return (
        <div className="Info-section__players-online-section Players-online-section">
            <div className="Players-online-section__content">
                <div className="Players-online-section__carousel">
                    <i className="fas fa-angle-left Players-online-section__carousel__arrow-left"
                        onClick={() => this.onClickPrev()}/>
                    {this.getCurrentCarouselItem()}
                    <i className="fas fa-angle-right Players-online-section__carousel__arrow-right"
                        onClick={() => this.onClickNext()}/>
                </div>
                <div className="Players-online-section__text">
                    <div className="Players-online-section__text__description-header">
                        {this.props.t('work_example_header')}
                        <div className="Players-online-section__text__description">
                            {this.props.t('work_example_description')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
class PlayersOnlineSectionPart extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.onClickNext.bind(this);
        this.onClickPrev.bind(this);
        this.getCurrentCarouselItem.bind(this);
        this.refreshCurrentGameStats.bind(this);
    }

    componentDidMount() {
        this.refreshCurrentGameStats();
        setInterval(() => this.refreshCurrentGameStats(), 30000);
    }

    private getCurrentCarouselItem(): JSX.Element {
        const currItem = this.state.currentCarouselItem;
        if (currItem)
            return (
                <div>
                    <div className="Players-online-section__carousel__item"/>
                    <div className="Players-online-section__carousel__players">
                        {`${this.props.t('curr_players_online')} | ${currItem.currPlayersOnline}`}
                    </div>
                </div>
            )
        else
            return null;
    }

    private onClickPrev(): void {
        const gameStats = this.state.currentGamesStats;
        const currItem = this.state.currentCarouselItem;
        let currItemIndex = gameStats.indexOf(currItem);
        if (currItemIndex == 0)
            this.setState({
                currentCarouselItem: this.state.currentGamesStats[gameStats.length - 1]
            })
        else
            this.setState({
                currentCarouselItem: this.state.currentGamesStats[--currItemIndex]
            })
    }

    private onClickNext(): void {
        const gameStats = this.state.currentGamesStats;
        const currItem = this.state.currentCarouselItem;
        let currItemIndex = gameStats.indexOf(currItem);
        if (currItemIndex == (gameStats.length - 1))
            this.setState({
                currentCarouselItem: this.state.currentGamesStats[0]
            })
        else
            this.setState({
                currentCarouselItem: this.state.currentGamesStats[++currItemIndex]
            })
    }

    private refreshCurrentGameStats(): void {
        const currItem = this.state.currentCarouselItem;
        RestApi.getInfoGamesStats()
            .then(resp => {
                this.setState({
                    currentGamesStats: resp.data,
                    currentCarouselItem: currItem ? currItem : resp.data[0]
                })
            })
    }

    protected getClassName(): string {
        return PlayersOnlineSectionPart.name;
    }
}

interface Props extends AppProps {

}

interface State {
    currentCarouselItem: GameStats,
    currentGamesStats: GameStats[]
}

export default withTranslation()(PlayersOnlineSectionPart);