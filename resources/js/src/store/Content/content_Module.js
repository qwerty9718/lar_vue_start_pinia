import axios from "axios";

export const content_Module = {
    state: () => ({
        text: '',
        posts: []

    }),
    getters: {
      getText(state){
          return state.text;
      },
        getPosts(state){
          return state.posts;
        }

    },
    mutations: {

    },
    actions: {
        async getTextDB({state, commit},{lang}){
            const response = await axios.get('/api/'+ lang +'/getSecondContent');
            state.text = response.data;
        },

        async getPostsDB({state, commit},{lang}){
            const response = await axios.get('/api/'+ lang +'/getContent');
            state.posts = response.data;
        }
    },


    namespaced: true
}
