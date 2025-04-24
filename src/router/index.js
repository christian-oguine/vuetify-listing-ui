import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Remove or comment out these routes if you deleted the components
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../views/HomeView.vue'),
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;