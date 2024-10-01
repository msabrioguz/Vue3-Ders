import { createRouter, createWebHistory } from 'vue-router';
import HomeComponents from '@/components/HomeComponents.vue';
import ArticlePage from '@/components/articles/ArticlePage.vue';
import ContactPage from '@/components/contact/ContactPage.vue';
import ArticleCard from '@/components/articles/ArticleCard.vue';
import NotFound from '@/components/NotFound.vue';
import AlertPage from '@/components/AlertPage.vue';
import LoginPage from '@/components/LoginPage.vue';

const checkAuth = () => {
  const isAuth = true;
  if (!isAuth) {
    return '/login';
  }
};

const isAdmin = () => {
  const isAdmin = false;
  if (!isAdmin) {
    return '/';
  }
};

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
      component: ArticleCard,
      beforeEnter: [checkAuth, isAdmin]
    },
    {
      path: '/articles/:articleId',
      name: 'articles',
      component: ArticlePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: ContactPage, warning: AlertPage }
    },
    {
      path: '/:notFound(.*)',
      name: 'notfound',
      component: NotFound
    }
  ],
  linkActiveClass: 'active'
});

// router.beforeEach((to, from) => {
//   const isAuth = false;

//   if (to.path !== '/login' && !isAuth) {
//     return '/login';
//   }
//   if(to.path === '/login' && isAuth){
//     return '/'
//   }
//   return true;
// });

export default router;
