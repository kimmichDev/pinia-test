import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from "../views/JobsView.vue"
import JobDetail from "../views/JobDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/job/:id",
      name: "jobDetail",
      component: JobDetail,
      props: true
    }
  ]
})

export default router
