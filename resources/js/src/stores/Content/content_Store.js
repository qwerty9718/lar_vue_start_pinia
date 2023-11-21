import { defineStore } from 'pinia'
import axios from "axios";

export const content_Store = defineStore('content_store', {
    state: () => {return {
        text: '',
        posts: []
    }},

    actions: {
        async getTextDB(lang){
            const response = await axios.get('/api/'+ lang +'/getSecondContent');
            this.text = response.data;
        },

        async getPostsDB(lang){
            const response = await axios.get('/api/'+ lang +'/getContent');
            this.posts = response.data;
            console.log(this.posts)
        }
    },
})
