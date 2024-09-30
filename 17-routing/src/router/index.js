import { createRouter, createWebHistory } from 'vue-router';
import HomeComponents from '@/components/HomeComponents.vue';
import ArticlePage from '@/components/articles/ArticlePage.vue';
import ContactPage from '@/components/contact/ContactPage.vue';
import ArticleCard from '@/components/articles/ArticleCard.vue';
import NotFound from '@/components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponents
    },
    {
      path: '/articles',
      name: 'article',
      component: ArticleCard
    },
    {
      path: '/articles/:articleId',
      name: 'articles',
      component: ArticlePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/:notFound(.*)',
      name: 'notfound',
      component: NotFound
    }
  ],
  linkActiveClass: 'active'
});

export default router;
