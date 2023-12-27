import LoginView from "@/components/pages/LoginView.vue";
import HomeView from "@/components/pages/HomeView.vue"
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routSettings
})

export default router
