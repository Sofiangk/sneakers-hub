import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sneakers from '../views/Sneakers.vue';
import About from '../views/About.vue';
import Login from '@/views/Auth/Login.vue';
import Signup from '@/views/Auth/Signup.vue';
import SneakerInfo from '@/views/SneakerInfo.vue';
import Dashboard from '@/views/Admin/Dashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sneakers', name: 'Sneakers', component: Sneakers },
  { path: '/sneakers/:id', name: 'Sneaker Detail', component: SneakerInfo },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/:catchAll(.*)', redirect: '/' },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  history: createWebHistory(),
  routes,
});

export default router;
