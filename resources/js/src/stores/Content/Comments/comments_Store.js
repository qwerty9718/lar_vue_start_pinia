import {defineStore} from 'pinia';
import {lang_Store} from "@/src/stores/Language/lang_Store.js";
import my_axios from "@/src/axios/my_axios.js";
import router from "@/src/router/router.js";
import {user_Store} from "@/src/stores/User/user_Store.js";
import {error_Store} from "@/src/stores/error_Store.js";

export const comments_Store = defineStore('comments_store', {
    state: () => {
        return {
            route_id: null,
            post: {},
            comments: {},
            replies:{},
            comments_Data: {title: '', body: '', post_id: '', user_id: ''},
            pagination: {},
        }
    },

    actions: {

        async getPostWithComments() {
            const response = await my_axios.get(`/api/${lang_Store().lang}/comment/${this.route_id}/post`);
            await this.setCommentsAfterResponse(response, false);
        },

        async loadMore() {
            let page = this.pagination[this.route_id].current_page;
            let last_page = this.pagination[this.route_id].last_page;
            if (page < last_page) {
                page += 1;
                const response = await my_axios.get(`/api/${lang_Store().lang}/comment/${this.route_id}/post?page=${page}`);
                await this.setCommentsAfterResponse(response, true);
            }
        },

        async createComment() {
            this.comments_Data.post_id = this.route_id;
            this.comments_Data.user_id = user_Store().user.id;
            this.comments_Data.title = user_Store().user.name;
            const request = await my_axios.post(`/api/${lang_Store().lang}/comment/`, this.comments_Data);
            this.comments[this.route_id].unshift(request.data);
            this.comments_Data = {title: '', body: '', post_id: '', user_id: ''};
            error_Store().emptyErrorList();
        },

        // async getReplies(comment) {
        //     const response = await my_axios.get(`/api/${lang_Store().lang}/comment/${comment.id}/replies`);
        //     this.replies[comment.id] = response.data;
        //     console.log(this.replies)
        // },

        async deleteComment(comment) {
            this.comments[this.route_id] = this.comments[this.route_id].filter((item) => item.id !== comment.id);
            const request = await my_axios.delete(`/api/${lang_Store().lang}/comment/${comment.id}`);
        },

        async setCommentsAfterResponse(response,isLoadMore) {
            try {
                if (!isLoadMore){
                    this.post[this.route_id] = response.data.post;
                    this.comments[this.route_id] = response.data.comments;
                    this.pagination[this.route_id] = response.data.pagination;
                }

                if (isLoadMore){
                    this.comments[this.route_id].push(...response.data.comments);
                    this.pagination[this.route_id] = response.data.pagination;
                }

            } catch (e) {
                await router.push({name: 'error'});
            }
        }
    },
});
