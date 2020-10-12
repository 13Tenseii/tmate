import Axios, {AxiosRequestConfig, AxiosResponse, Method} from "../../../node_modules/axios/index";
import Dto from "../dto/Dto";
import HttpMethod from "./common/HttpMethod";
import Jsonable from "./common/Jsonable";
import Request from "./common/Request";
import TestDto from "../dto/TestDto";

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

    public static getTest(): Promise<AxiosResponse<TestDto>> {
        return RestApi.call(
            "/test",
            HttpMethod.GET,
        );
    }

}