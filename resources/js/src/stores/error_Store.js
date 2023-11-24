import { defineStore } from 'pinia'

export const error_Store = defineStore('error_store', {
    state: () => { return {
        error_list: {},
    }},

    actions: {
        setErrors(current_route,array){
            this.error_list[current_route] = array;
        },
    },
})
