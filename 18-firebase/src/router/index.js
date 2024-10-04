import AddArticle from '@/views/AddArticle.vue';
import HomePage from '@/views/HomePage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/users/register',
            name: 'register',
            component: RegisterPage
        },
        {
            path: '/admin/AddArticle',
            name: 'addarticle',
            component: AddArticle
        }
    ]
});

export default router;
