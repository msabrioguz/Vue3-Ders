import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsView from '@/views/StudentsView.vue'
import StudentDetail from '@/views/StudentDetail.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Anasayfa'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Hakkımızda'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView,
      meta: {
        title: 'Öğrenciler'
      }
    },
    {
      path: '/students/:id',
      name: 'student-detail',
      component: StudentDetail,
      props: true,
      meta: {
        title: 'Öğrenci Detay'
      }
    },
    {
      path: '/studentsList',
      redirect: 'students',
      meta: {
        title: 'Öğrenciler Listesi'
      }
    },
    {
      // 404 Bulunamadı Sayfası
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404 Sayfa Bulunamadı'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
