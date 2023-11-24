import { defineStore } from 'pinia'
import axios from "axios";
import my_axios from "@/src/axios/my_axios.js";
import {error_Store} from "@/src/stores/error_Store.js";

export const comments_Store = defineStore('comments_store', {
    state: () => {return {
        comments: [],
        commentData: {title: '',body:''}
    }},

    actions: {

        async getCommentsDB(lang){
            const response = await axios.get('/api/'+ lang +'/comments');
            this.comments = response.data;
        },

        async createComment(lang){
            const request = await my_axios.post('/api/'+ lang +'/comments',this.commentData);
            if (request.data.id){this.successCreatePost();}
        },

        successCreatePost(){
            this.commentData = {title: '',body:''};
            error_Store().error_list = {};
        }
    },
})
