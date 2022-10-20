import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import EditWorkoutsView from '../views/EditWorkoutsView.vue'
import FriendsWorkoutView from '../views/FriendsWorkoutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/EditWorkoutsView.vue'),
  },
  {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsView.vue'),
  },
  {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendWorkoutsView.vue'),
  },
  {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
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


