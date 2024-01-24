
import axios from 'axios';
import router from "@/src/router/router.js";
import {login_register_Store} from "@/src/stores/User/login_register_Store.js";
import {user_Store} from "@/src/stores/User/user_Store.js";
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

window.axios.interceptors.request.use( config => {
    if (localStorage.getItem('x_xsrf_token')){
        config.headers.Authorization = 'Bearer '+ localStorage.getItem('x_xsrf_token')
    }
    return config;
}, error => {});


window.axios.interceptors.response.use( config => {
    if (localStorage.getItem('x_xsrf_token')){
        config.headers.Authorization = 'Bearer '+ localStorage.getItem('x_xsrf_token')
    }

    return config;
}, error => {

    if (error.response.status === 401 || error.response.status === 419){
        user_Store().afterLogout();
    }

    if(error.response.status === 422){
        login_register_Store().setErrors(error.response.data.errors)
    }

    if (error.response.status === 403){
        login_register_Store().setErrors({})
        login_register_Store().errors.message = error.response.data.message;
    }

    // console.log(error)

});

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});
