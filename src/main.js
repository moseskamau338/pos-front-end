import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import mitt from "mitt";
import './assets/css/index.css'
import router from './router'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import {functions} from './library/helpers'
import App from './App.vue'


const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPersist)


createApp(App)
    .provide('helpers', functions)
    .provide('emitter', emitter)
    .use(router)
    .use(pinia)
    .component('BaseLayout', BaseLayout)
    .mount('#app')
