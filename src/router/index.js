import Vue from 'vue'
import VueRouter from 'vue-router'
import { isLoggedIn } from './../auth/index'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('./../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('./../views/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('./../views/ContactUs.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('./../views/Login.vue'),
        meta: {
            hideNavbar: true,
        },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('./../views/Profile.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () =>
            import ('./../views/Settings.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () =>
            import ('./../views/Signup.vue'),
        meta: {
            hideNavbar: true,
        },
    },
    {
        path: '/forget',
        name: 'ForgetPassword',
        component: () =>
            import ('./../views/ForgetPassword.vue'),
        meta: {
            hideNavbar: true,
        },
    },
    {
        path: '*',
        name: 'NotFound',
        component: () =>
            import ('./../views/NotFound.vue'),
        meta: {
            hideNavbar: true,
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.name == 'Login' && isLoggedIn()) {
        next({
            path: '/',
        })
    } else if (to.name == 'Signup' && isLoggedIn()) {
        next({
            path: '/',
        })
    } else if (
        to.name != 'Login' &&
        to.name != 'Signup' &&
        to.name != 'ForgetPassword' &&
        !isLoggedIn()
    ) {
        next({
            path: '/login',
        })
    } else {
        next()
    }
})

export default router