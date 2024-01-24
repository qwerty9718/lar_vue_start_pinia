import {defineStore} from 'pinia'
import axios from "axios";
import router from "@/src/router/router.js";

export const login_register_Store = defineStore('login_register_store', {
    state: () => {
        return {
            login_data: {password: '', email: '', remember: false},
            register_data: {name: '', email: '', password: '', password_confirmation: '', remember: false},
            token: null,
            errors: {}
        }
    },

    actions: {

        async login(language) {
            const request = await axios.post(`/api/${language}/auth/login`, this.login_data);
            await this.successEnter(request);
        },

        async register(language) {
            const request = await axios.post(`/api/${language}/auth/register`, this.register_data);
            await this.successEnter(request);
        },

        async successEnter(request) {
            localStorage.setItem('x_xsrf_token', request.data.token);
            this.getAccessToken();
            await router.push({name: 'cabinet'});
            this.emptyLoginAndRegisterData();
        },

        getAccessToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        },

        removeAccessToken() {
            this.token = null;
            localStorage.removeItem('x_xsrf_token');
        },

        setErrors(array) {
            this.errors = array;
        },

        emptyLoginAndRegisterData() {
            this.login_data = {password: '', email: '', remember: false};
            this.register_data = {name: '', email: '', password: '', password_confirmation: '', remember: false};
            this.errors = {};
        },

    },
})
