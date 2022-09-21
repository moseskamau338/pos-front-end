import { createApp } from 'vue'
import './assets/css/index.css'
import router from './router'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import App from './App.vue'

createApp(App)
    .use(router)
    .component('BaseLayout', BaseLayout)
    .mount('#app')
