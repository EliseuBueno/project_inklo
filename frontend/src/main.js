import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import router from './router'

createApp(App).use(router, bootstrap).mount('#app')
