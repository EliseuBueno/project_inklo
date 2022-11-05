import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Link from '../views/Link.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/link/:login',
        name: 'Link',
        component: Link
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router