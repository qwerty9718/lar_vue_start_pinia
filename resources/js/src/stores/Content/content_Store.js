import { defineStore } from 'pinia'
import axios from "axios";
import my_axios from "@/src/axios/my_axios.js";
import {error_Store} from "@/src/stores/error_Store.js";

export const content_Store = defineStore('content_store', {
    state: () => {return {
        text: '',
        posts: [],
        postData: {title_ru: '',title_en:'',body_ru:'',body_en:''}
    }},

    actions: {
        async getTextDB(lang){
            const response = await axios.get('/api/'+ lang +'/content/message');
            this.text = response.data;
        },

        async getPostsDB(lang){
            const response = await axios.get('/api/'+ lang +'/content/posts');
            this.posts = response.data;
        },

        async createPost(lang){
            const request = await my_axios.post('/api/'+ lang +'/content/posts',this.postData);
            if (request.data.id){this.successCreatePost();}
        },

        successCreatePost(){
            this.postData = {title_ru: '',title_en:'',body_ru:'',body_en:''};
            error_Store().error_list = {};
        }
    },
})
