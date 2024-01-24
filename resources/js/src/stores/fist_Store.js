import { defineStore } from 'pinia'
import axios from "axios";

export const fist_Store = defineStore('first_store', {
    state: () => {return {
        number: 10
    }},

    actions: {
        initNumber(num){
            this.number = this.number + num;
        },
    },
})
