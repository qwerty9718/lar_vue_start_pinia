export default [
    {
        path:'/user/cabinet',
        component: () => import('@/src/pages/User/Cabinet.vue'),
        name:'cabinet'
    },

    {
        path:'/login',
        component: () => import('@/src/pages/User/Login.vue'),
        name:'login'
    },

    {
        path:'/register',
        component: () => import('@/src/pages/User/Register.vue'),
        name:'register'
    },

];
