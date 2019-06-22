import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Signin from '@/pages/signin';
import SignUp from '@/pages/signup';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/signin'
        },
        {
            path: '/',
            redirect: '/signin'
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home'),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('signin');
    else if (!requiresAuth && currentUser) next('home');
    else next();
});

export default router;
