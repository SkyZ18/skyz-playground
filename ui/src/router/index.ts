import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../components/views/HomeView.vue")
        },
        {
            path: '/games',
            name: 'games',
            component: () => import("../components/views/GameView.vue")
        }
    ],
})

export default router
