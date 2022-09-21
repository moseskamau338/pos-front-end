import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './assets/css/index.css'
import router from './router'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPersist)


createApp(App)
    .use(router)
    .use(pinia)
    .component('BaseLayout', BaseLayout)
    .mount('#app')
