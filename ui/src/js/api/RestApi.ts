import Axios, {AxiosRequestConfig, AxiosResponse, Method} from "../../../node_modules/axios/index";
import HttpMethod from "../enums/HttpMethod";
import Request from "./common/Request";
import GameStats from "../dto/mainview/GameStats";

export default class RestApi {
    private static readonly apiUrl = "/api";

    private static call(methodUrl: string, method: HttpMethod, data?: Request): Promise<any> {
        const targetUrl = window.location.origin.concat(RestApi.apiUrl).concat(methodUrl);
        const config: AxiosRequestConfig = !data ? {
            url: targetUrl,
            method: method.value as Method
        } : {
            url: targetUrl,
            method: method.value as Method,
            data: data.toJson()
        };
        return Axios.request(config);
    }

    public static getInfoGamesStats(): Promise<AxiosResponse<GameStats[]>> {
        return RestApi.call(
            "/info-games-stats",
            HttpMethod.GET
        );
    }
}