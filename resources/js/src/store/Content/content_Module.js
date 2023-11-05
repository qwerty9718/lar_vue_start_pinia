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
            const response = await axios.get('/api/'+ lang +'/getContent',{
                headers:{
                    'authorization': 'Bearer '+ localStorage.getItem('x_xsrf_token')
                }
            });
            state.posts = response.data;
        }
    },


    namespaced: true
}
