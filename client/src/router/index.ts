import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
 
  {
      path: '/admin',
      name: 'admin',
      component: AdminView,
  },
  {
      path: '/signup',
      name: 'signun',
      component: SignUpView,
  },
  {
      path: '/login',
      name: 'login',
      component: LoginView,
  },
],
linkActiveClass: 'is-active',
});


