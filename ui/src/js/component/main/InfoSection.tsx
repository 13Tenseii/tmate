import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import AppProps from "../common/AppProps";
import GameStats from "../../dto/mainview/GameStats";
import RestApi from "../../api/RestApi";
import {withTranslation} from "react-i18next";


@Template(function (this: InfoSection) {
    return (
        <div className="Info-section" id={this.getBlockName()}>
            <div className="Info-section__about">

            </div>
            <div className="Info-section__games-stats">
                <div className="Info-section__column">
                    <div className="Info-section__game-stat">

                    </div>
                </div>
                <div className="Info-section__column">
                    <div className="Info-section__game-stat">

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
    }

    componentDidMount() {
        this.refreshCurrentGameStats();
        setInterval(() => this.refreshCurrentGameStats(), 30000)
    }

    private refreshCurrentGameStats(): void {
        RestApi.getInfoSectionStats()
            .then(resp => {
                this.setState({
                    currentGamesStats: resp.data
                })
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