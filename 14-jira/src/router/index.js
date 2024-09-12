import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTaskView from '@/views/AddTaskView.vue'
import EditTaskView from '@/views/EditTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task/add',
      name: 'AddTaskView',
      component: AddTaskView
    },
    {
      path: '/task/:id',
      name: 'EditTaskView',
      component: EditTaskView,
      props: true
    }
  ]
})

export default router
