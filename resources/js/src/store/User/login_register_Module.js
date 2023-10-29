import axios from "axios";
import router from "@/src/router/router.js";


export const login_register_Module = {
    state: () => ({
        login: {password: '', email: ''},
        register: {name: '', email: '', password: '', password_confirmation: ''},
        token: null
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
        async login({state, commit,dispatch}) {
            const data = {email: state.login.email, password: state.login.password};
            const get_csrf_cookie = await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/login', data);
            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
            dispatch('getAccessToken');
            router.push({name: 'cabinet'});
        },

        async register({state, commit,dispatch}) {
            const data = {
                name:state.register.name,
                email: state.register.email,
                password: state.register.password,
                password_confirmation: state.register.password_confirmation
            };

            const get_csrf_cookie = await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/register', data);
            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
            dispatch('getAccessToken');
            router.push({name: 'cabinet'});
        },

        getAccessToken({state, commit}){
            state.token = localStorage.getItem('x_xsrf_token');
        },
        removeAccessToken({state, commit}){
            state.token = null;
        }

    },


    namespaced: true
}
