import {i18n, TFunction} from "i18next";

export default interface AppProps {
    i18n: i18n,
    t: TFunction,
    tReady: boolean;
}