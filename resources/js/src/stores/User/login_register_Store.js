import { defineStore } from 'pinia'
import axios from "axios";
import router from "@/src/router/router.js";
export const login_register_Store = defineStore('login_register_store', {
    state: () => {return {
        login_data: {password: '', email: '', remember: false},
        register_data: {name: '', email: '', password: '', password_confirmation: '',remember: false},
        token: null,
        errors: {}
    }},

    actions: {

        async login(language) {
            const data = {email: this.login_data.email, password: this.login_data.password, remember: this.login_data.remember};
            if (data.remember === undefined){data.remember = false};
            const response = await axios.post(`/api/${language}/auth/login`, data);
            localStorage.setItem('x_xsrf_token', response.data.token);
            this.getAccessToken();
            router.push({name: 'cabinet'});
            this.login_data = {password: '', email: '', remember: false};
            this.errors = {};
        },

        async register(language) {
            const data = {
                name:this.register_data.name,
                email: this.register_data.email,
                password: this.register_data.password,
                password_confirmation: this.register_data.password_confirmation,
                remember: this.register_data.remember
            };
            if (data.remember === undefined){data.remember = false};
            const response = await axios.post(`/api/${language}/auth/register`, data);
            localStorage.setItem('x_xsrf_token', response.data.token);
            this.getAccessToken();
            await router.push({name: 'cabinet'});
            this.register_data = {name: '', email: '', password: '', password_confirmation: ''};
            this.errors = {};
        },

        getAccessToken(){
            this.token = localStorage.getItem('x_xsrf_token');
        },
        removeAccessToken(){
            this.token = null;
            localStorage.removeItem('x_xsrf_token');
        },

        setErrors(array){
            this.errors = array;
        }

    },
})
