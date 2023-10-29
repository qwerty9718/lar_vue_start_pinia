import axios from "axios";

export const content_Module = {
    state: () => ({
        text: ''
    }),
    getters: {
      getText(state){
          return state.text;
      }
    },
    mutations: {

    },
    actions: {
        async getTextDB({state, commit}){
            const response = await axios.get('/api/getContent');
            state.text = response.data;
        }
    },


    namespaced: true
}
