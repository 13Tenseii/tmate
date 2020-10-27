import ReactComponent from "../../../react/common/ReactComponent";
import {withTranslation} from "react-i18next";
import Template from "../../../react/common/ReactUtil";
import React from "react";
import AppProps from "../../common/AppProps";
import GameStats from "../../../dto/mainview/GameStats";


@Template(function (this: PlayersOnlineCarouselItem) {
    return (
        <div id={this.getClassName()}>
            <div className="Players-online-section__carousel__item"/>
            <div className={`Players-online-section__carousel__players ${this.state.isRefreshing ? 'Players-online-section__carousel__players-refreshing' : ''}`}
                 id={this.props.item.gameId.toString()}
                 onAnimationEnd={() => this.onAnimationEnd()}>
                {`${this.props.t('curr_players_online')} | ${this.props.item.currPlayersOnline}`}
            </div>
        </div>
    )
})
class PlayersOnlineCarouselItem extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {isRefreshing: true};
        this.onAnimationEnd.bind(this);
    }

    private onAnimationEnd(): void {
        this.setState({isRefreshing: false});
    }

    protected getClassName(): string {
        return PlayersOnlineCarouselItem.name;
    }
}

interface Props extends AppProps {
    item: GameStats
}

interface State {
    isRefreshing: boolean
}
export default withTranslation()(PlayersOnlineCarouselItem)