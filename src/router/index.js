import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('@/views/home/home.vue')
const cart = () =>
    import ('@/views/cart/cart.vue')
const profile = () =>
    import ('@/views/profile/profile.vue')
const category = () =>
    import ('@/views/category/category.vue')


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/category',
        component: category
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router