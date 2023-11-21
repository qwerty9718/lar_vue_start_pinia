import { defineStore } from 'pinia'
import axios from "axios";
import {login_register_Store} from "@/src/stores/User/login_register_Store.js";

export const user_Store = defineStore('user_store', {
    state: () => {return {
        user: {}
    }},

    actions: {
        async getUserData(){
            const response = await axios.get('/api/user-data');
            this.user = response.data;
        },

        afterLogout(){
            this.user = {};
            login_register_Store().removeAccessToken();
        }
    },
})
