import axios from "axios";
import router from "@/src/router/router.js";
import {login_register_Store} from "@/src/stores/User/login_register_Store.js";

const my_axios = axios.create();


my_axios.interceptors.request.use( config => {
    if (localStorage.getItem('x_xsrf_token')){
        config.headers.Authorization = 'Bearer '+ localStorage.getItem('x_xsrf_token')
    }
    return config;
}, error => {});


my_axios.interceptors.response.use( config => {
    if (localStorage.getItem('x_xsrf_token')){
        config.headers.Authorization = 'Bearer '+ localStorage.getItem('x_xsrf_token')
    }

    return config;
}, error => {

    if (error.response.status === 401 || error.response.status === 419){
        router.push({name: 'login'});
        const token = localStorage.getItem('x_xsrf_token');
        if (token){
            localStorage.removeItem('x_xsrf_token');
            login_register_Store().removeAccessToken();
        }
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

export default my_axios;
