import {createI18n} from "vue-i18n";
import en from "@/src/i18n/langs/en.js";
import ru from "@/src/i18n/langs/ru.js";

const messages = {
    en: en,
    ru: ru,
}


const getLang = () => {
    const lang = localStorage.getItem('lang');
    return lang;
}

const setLang = () => {
    if (!getLang()){
        localStorage.setItem('lang', 'ru');
    }
}
setLang();


const i18n = createI18n({
    locale: getLang(), // Установите начальную локаль по умолчанию
    fallbackLocale: 'en',
    messages,
})



export default i18n;
