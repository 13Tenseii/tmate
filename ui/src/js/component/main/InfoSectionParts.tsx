import ReactComponent from "../../react/common/ReactComponent";
import Template from "../../react/common/ReactUtil";
import React from "react";
import AppProps from "../common/AppProps";
import GameStats from "../../dto/mainview/GameStats";
import {withTranslation} from "react-i18next";
import ExampleWorkSectionPart from "./parts/ExampleWorkSectionPart";
import PlayersOnlineSectionPart from "./parts/PlayersOnlineSectionPart";


@Template(function (this: InfoSectionParts) {
    return (
        <div className="Info-section" id={this.getBlockName()}>
            <div className="Info-section__header">
                {this.props.t('platform_target_info')}
            </div>
            <ExampleWorkSectionPart/>
            <PlayersOnlineSectionPart/>
        </div>
    )
})
class InfoSectionParts extends ReactComponent<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    // componentDidMount() {
    //     this.refreshCurrentGameStats();
    //     setInterval(() => this.refreshCurrentGameStats(), 30000)
    // }
    //
    // private refreshCurrentGameStats(): void {
    //     RestApi.getInfoGamesStats()
    //         .then(resp => {
    //             this.setState({
    //                 currentGamesStats: resp.data
    //             })
    //         })
    // }

    protected getClassName(): string {
        return InfoSectionParts.name;
    }
}

interface Props extends AppProps {

}

interface State {
    currentGamesStats: GameStats[]
}

export default withTranslation()(InfoSectionParts);