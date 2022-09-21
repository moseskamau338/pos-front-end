import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: true
})

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/pages/Dashboard.vue'),
        meta:{
            requiresAuth: true,
        }

    },
    {
        path: '/overview',
        name: 'overview',
        component: () => import('@/pages/Landing.vue'),
        meta:{
            requiresGuest: true,
            layout: 'FlatLayout'
        }

    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/pages/Test.vue'),
        meta:{
            requiresAuth: true
        }

    },


    // default pages
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/error/404.vue') ,
        meta:{
            layout: 'FlatLayout',
        }
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export let requiresAuth = false;
export let requiresGuest = false;

   router.beforeEach((to, from, next) => {
       if (to.path) {NProgress.start()}

       const { title } = to.meta;
        to.meta.title = typeof title === 'function' ? title(to) : title;

       requiresAuth = to.matched.some(record => record.meta.requiresAuth)
       requiresGuest = to.matched.some(record => record.meta.requiresGuest)
       next()

       next();
    //    if (requiresAuth){
    //        nextMain = next
    //        if (checkAuth()){
    //             next()
    //        }else{
    //            setTimeout(()=>{
    //                //recheck authentication (should be updated by main.js)
    //                if (!checkAuth()){keycloak.login()}
    //            }, 500)
    //        }
    //    }else if(requiresGuest){
    //        //guest screen?
    //            setTimeout(()=>{
    //                if (checkAuth()){
    //                    next({name: 'dashboard'})
    //               }else{next()}
    //            }, 500)
    //    }else{
    //        next()
    //    }
 })



router.afterEach(() => {
    NProgress.done();
})



export default router