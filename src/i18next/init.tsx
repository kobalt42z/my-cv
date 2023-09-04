import i18n  from "i18next"
import { initReactI18next,} from "react-i18next"
import {en} from "./translation/en"


i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {en},
    })