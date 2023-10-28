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

        path: '/:pathMatch(.*)*',
        component: () => import('@/src/pages/Error.vue'),
        name:'error'
    },

]
const router = createRouter({
    routes,
    history:createWebHistory(),
    linkActiveClass: 'active',
})


export default router;
