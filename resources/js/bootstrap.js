
import axios from 'axios';
import router from "@/src/router/router.js";
import store from "@/src/store/index.js";
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;



window.axios.interceptors.response.use( {}, error => {

    if (error.response.status === 401 || error.response.status === 419){
        router.push({name: 'login'});
        const token = localStorage.getItem('x_xsrf_token');
        if (token){
            localStorage.removeItem('x_xsrf_token');
            store.dispatch('login_register_module/removeAccessToken');
        }
    }

    if(error.response.status === 422){
        store.dispatch('login_register_module/setErrors',{array:error.response.data.errors});
    }

    if (error.response.status === 403){
        store.dispatch('login_register_module/setErrors',{array: {message: error.response.data.message}});
    }



    console.log(error)

});


// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
