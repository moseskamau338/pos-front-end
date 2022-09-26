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

const app = createApp(App)
//control ui
app.provide('helpers', functions)
    .provide('emitter', emitter)
    .use(router)
    .use(pinia)

import {useUiStore} from '@/db/ui'
useUiStore().init()


app.component('BaseLayout', BaseLayout)
    .mount('#app')
