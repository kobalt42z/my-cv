import i18n  from "i18next"
import { initReactI18next,} from "react-i18next"
import {en} from "./translation/en"
import {he} from "./translation/he"


i18n
    .use(initReactI18next)
   
    .init({
        fallbackLng: "en",
        lng: "he",
        interpolation: {
            escapeValue: false,
        },
        resources: {en,he},
    })