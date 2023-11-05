import {createRouter, createWebHistory} from "vue-router";
import login_routes from "@/src/router/login_register_routes/login_routes.js";

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
    ...login_routes,

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
