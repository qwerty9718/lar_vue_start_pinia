import axios from "axios";

export const firs_Module = {
    state: () => ({

        number: 10

    }),
    getters: {
        getNumber(state){
            return state.number;
        }
    },
    mutations: {
        setNumber(state, num){
            state.number = state.number + num;
        }
    },
    actions: {
        initNumber({state, commit},num){
            commit('setNumber', num);
        },

    },


    namespaced: true
}
