import {defineStore} from 'pinia';
import {lang_Store} from "@/src/stores/Language/lang_Store.js";
import my_axios from "@/src/axios/my_axios.js";
import router from "@/src/router/router.js";
import {user_Store} from "@/src/stores/User/user_Store.js";
import {error_Store} from "@/src/stores/error_Store.js";
import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";

export const replies_Store = defineStore('replies_store', {
    state: () => {
        return {
            replies:{},
            pagination: {},
            showInputReply: 0,
            replyData:{
                title: "",
                body : "",
                post_id: 0,
                user_id: 0,
                parent_id: 0,
                reply_from: 0,
                reply_to: 0,
                reply_title: ''
            }
        }
    },

    actions: {

        async getReplies(comment) {
            this.showInput(comment);
            const response = await my_axios.get(`/api/${lang_Store().lang}/comment/${comment.id}/replies`);
            this.replies[comment.id] = response.data.data;
            console.log(this.replies)
        },

        async createReply(){
            const request = await my_axios.post(`/api/${lang_Store().lang}/comment/reply`, this.replyData);
            console.log(request.data);
        },

        showInput(comment){
            error_Store().emptyErrorList();
            if (this.showInputReply !== comment.id){
                this.fillReplyData(comment);
                return  this.showInputReply = comment.id;
            }
            if (this.showInputReply === comment.id){
                this.emptyReplyData();
                return  this.showInputReply = 0;
            }
        },

        emptyReplyData(){
            this.replyData = {
                title: "",
                body : "",
                post_id: 0,
                user_id: 0,
                parent_id: 0,
                reply_from: 0,
                reply_to: 0,
                reply_title: 0
            };
        },

        fillReplyData(comment){
            this.replyData.body = '';
            this.replyData.parent_id = comment.id;
            this.replyData.post_id = comments_Store().route_id;
            this.replyData.title = user_Store().user.name;
            this.replyData.user_id = user_Store().user.id;
            this.replyData.reply_from = user_Store().user.id;
            this.replyData.reply_to = comment.user_id;
            this.replyData.reply_title = `from @${user_Store().user.name}`;
        }
    },
});
