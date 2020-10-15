import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./i18n/locale_en.json";
import ru from "./i18n/locale_ru.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            ru
        },
        supportedLngs: ["en", "ru"],
        fallbackLng: "en",
        debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true
        }
    });

export default i18n;