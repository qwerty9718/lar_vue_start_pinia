import axios from "axios";

export const lang_Module = {
    state: () => ({
        lang: ''
    }),
    getters: {
        getLang(state){
            return state.lang;
        }
    },
    mutations: {},
    actions: {
        getLangFromLocalStorage({state, commit}) {
            state.lang = localStorage.getItem('lang');
        },
        setLanguage({state, commit},{lang,$i18n}) {
            let currentLang = '';

            if (lang === 'ru') {
                currentLang = 'en'
            }
            if (lang === 'en') {
                currentLang = 'ru';
            }

            $i18n.locale = currentLang;
            localStorage.setItem('lang', currentLang);
            state.lang = currentLang;

        },
    },


    namespaced: true
}
