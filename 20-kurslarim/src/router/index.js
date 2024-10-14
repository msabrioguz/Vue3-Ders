import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import AddCourseView from '@/views/AddCourseView.vue';
import CoursesView from '@/views/CoursesView.vue';
import EditCourseView from '@/views/EditCourseView.vue';
import ProfileView from '@/views/ProfileView.vue';
import DashMainPage from '@/views/DashMainPage.vue';
import { isAuth, isLoggedIn } from '@/composables/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: isLoggedIn
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: isAuth,
      children: [
        { path: '', name: 'dashMainPage', component: DashMainPage },
        { path: 'AddCourse', name: 'addcourse', component: AddCourseView },
        { path: 'Courses', name: 'courses', component: CoursesView },
        { path: 'EditCourse/:id', name: 'editcourse', component: EditCourseView }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: isAuth
    }
  ]
});

export default router;
