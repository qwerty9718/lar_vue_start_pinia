import axios from "axios";

export const user_Module = {
    state: () => ({
        user:null
    }),
    getters: {
        getUser(state){
            return state.user;
        }
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        }
    },
    actions: {
        async getUserData({state, commit}){
            const response = await axios.get('/api/user-data',{
                headers:{
                    'authorization': 'Bearer '+ localStorage.getItem('x_xsrf_token')
                }
            });
            commit('setUser',response.data);
        },

        afterLogout({state, commit,dispatch}){
            commit('setUser',null);
            dispatch('login_register_module/removeAccessToken', {}, {root:true});
        }

    },


    namespaced: true
}
