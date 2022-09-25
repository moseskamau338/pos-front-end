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
            title:'Dashboard',
            requiresAuth: true,
        }

    },
    /*
    * #########################################
    *         Inventory Routes
    * #########################################
    * */
    {
        path: '/inventory/products',
        name: 'inventory-products',
        component: () => import('@/pages/inventory/Products.vue'),
        meta:{
            title: 'Products',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Products',
                    active: true,
                },
            ]),
        }
    },
     {
        path: '/inventory/products/create',
        name: 'inventory-products-create',
        component: () => import('@/pages/inventory/CreateProduct.vue'),
        meta:{
            title:'Create Product',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Products',
                    active: false,
                    to: {name: 'inventory-products'}
                },
                {
                    text: 'Create',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/inventory/ingredients',
        name: 'inventory-ingredients',
        component: () => import('@/pages/inventory/Ingredients.vue'),
        meta:{
            title:'Ingredients',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Ingredients',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/inventory/purchases',
        name: 'inventory-purchases',
        component: () => import('@/pages/inventory/purchases.vue'),
        meta:{
            title:'Purchases',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Purchases',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/inventory/suppliers',
        name: 'inventory-suppliers',
        component: () => import('@/pages/inventory/Suppliers.vue'),
        meta:{
            title:'Suppliers',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Suppliers',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/inventory/wastes',
        name: 'inventory-wastes',
        component: () => import('@/pages/inventory/Wastes.vue'),
        meta:{
            title:'Wastes',
            requiresAuth: true,
            breadcrumb: (route) => ([
                {
                    text: 'Inventory',
                    active: false,
                },
                {
                    text: 'Wastes',
                    active: true,
                },
            ]),
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