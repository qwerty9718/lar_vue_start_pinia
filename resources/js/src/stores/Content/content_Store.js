import { defineStore } from 'pinia'
import axios from "axios";

export const content_Store = defineStore('content_store', {
    state: () => {return {
        text: '',
        posts: []
    }},

    actions: {
        async getTextDB(lang){
            const response = await axios.get('/api/'+ lang +'/content/message');
            this.text = response.data;
        },

        async getPostsDB(lang){
            const response = await axios.get('/api/'+ lang +'/content/posts');
            this.posts = response.data;
        }
    },
})
