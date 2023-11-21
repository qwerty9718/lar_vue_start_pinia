import { defineStore } from 'pinia'
import axios from "axios";
import i18n from "@/src/i18n/i18n.js";

export const lang_Store = defineStore('lang_store', {
    state: () => {return {
        lang: ''
    }},

    actions: {
        getLangFromLocalStorage() {
            this.lang = localStorage.getItem('lang');
        },
        setLanguage(lang,i18n) {
            let currentLang = '';

            if (lang === 'ru') {
                currentLang = 'en'
            }
            if (lang === 'en') {
                currentLang = 'ru';
            }

            i18n.global.locale = currentLang;
            localStorage.setItem('lang', currentLang);
            this.lang = currentLang;
        },
    },
})
