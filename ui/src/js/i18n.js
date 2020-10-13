import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import enNs from "./i18n/locale_en.json";
import ruNs from "./i18n/locale_ru.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: enNs,
            ru: ruNs
        },
        lng: 'en',
        fallbackLng: enNs,
        debug: true,
        ns: ["translation"],
        defaultNS: "translation",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true
        }
    });

export default i18n;