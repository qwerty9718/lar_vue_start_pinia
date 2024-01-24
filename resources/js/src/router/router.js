import {createRouter, createWebHistory} from "vue-router";
import login_routes from "@/src/router/login_register_routes/login_routes.js";
import security_route_list from "@/src/router/security_routes/security_route_list.js";

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
        path:'/content/create',
        component: () => import('@/src/pages/User/CreatePost.vue'),
        name:'create_post'
    },

    {
        path:'/messages',
        component: () => import('@/src/pages/Messages/MessagePage.vue'),
        name:'message-page'
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
        if(security_route_list.includes(to.name)) {
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
