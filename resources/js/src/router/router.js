import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path:'/',
        component: () => import('@/src/pages/Main.vue'),
        name:'main'
    },
    {
        path:'/content',
        component: () => import('@/src/pages/Content.vue'),
        name:'content'
    },


    {
        path:'/user/cabinet',
        component: () => import('@/src/pages/User/Cabinet.vue'),
        name:'cabinet'
    },

    {
        path:'/user/login',
        component: () => import('@/src/pages/User/Login.vue'),
        name:'login'
    },

    {
        path:'/user/register',
        component: () => import('@/src/pages/User/Register.vue'),
        name:'register'
    },


    {

        path: '/:pathMatch(.*)*',
        component: () => import('@/src/pages/Error.vue'),
        name:'error'
    },

]
const router = createRouter({
    routes,
    history:createWebHistory(),
    linkActiveClass: 'active',
});




router.beforeEach((to, from, next) => {

    const accessToken = localStorage.getItem('x_xsrf_token')

    // Если ТОКЕНА нет
    if (!accessToken){
        if(to.name === 'cabinet') {
            return next({name:'login'})
        }

        if(to.name === 'content') {
            return next({name:'login'})
        }
    }


    // Если ТОКЕН ЕСТЬ
    if (accessToken){
        if(to.name === 'login' || to.name === 'register'){
            return next({name:'cabinet'})
        }
    }


    next()
})


export default router;
