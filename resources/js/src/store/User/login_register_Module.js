import axios from "axios";
import router from "@/src/router/router.js";


export const login_register_Module = {
    state: () => ({
        login: {password: '', email: '', remember: false},
        register: {name: '', email: '', password: '', password_confirmation: '',remember: false},
        token: null,
        errors: {}
    }),
    getters: {
        getLoginData(state) {
            return state.login;
        },

        getRegisterData(state) {
            return state.register;
        },

        getToken(state){
            return state.token;
        },
        getErrors(state){
            return state.errors;
        }
    },
    mutations: {
        setLoginData(state, user) {
            state.login = user;
        },

        setRegisterData(state, user) {
            state.register = user;
        }
    },

    actions: {
        async login({state, commit, dispatch},{language}) {
            const data = {email: state.login.email, password: state.login.password, remember: state.login.remember};
            const response = await axios.post(`/api/${language}/auth/login`, data);
            localStorage.setItem('x_xsrf_token', response.data.token);
            dispatch('getAccessToken');
            router.push({name: 'cabinet'});
            commit('setLoginData', {password: '', email: '', remember: false});
            state.errors = {};
        },

        async register({state, commit,dispatch},{language}) {
            const data = {
                name:state.register.name,
                email: state.register.email,
                password: state.register.password,
                password_confirmation: state.register.password_confirmation,
                remember: state.register.remember
            };

                const response = await axios.post(`/api/${language}/auth/register`, data);
                localStorage.setItem('x_xsrf_token', response.data.token);
                dispatch('getAccessToken');
                router.push({name: 'cabinet'});
                commit('setRegisterData', {name: '', email: '', password: '', password_confirmation: ''});
                state.errors = {};
        },

        getAccessToken({state, commit}){
            state.token = localStorage.getItem('x_xsrf_token');
        },
        removeAccessToken({state, commit}){
            state.token = null;
            localStorage.removeItem('x_xsrf_token');
        },

        setErrors({state, commit, dispatch},{array}){
            state.errors = array;
        }

    },

    namespaced: true
}
