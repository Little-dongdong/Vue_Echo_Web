import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home');
const Profile = () => import('@/views/profile/Profile');
const Users = () => import('@/views/users/Users');
const Login = () => import('@/components/content/login/Login')
const Register = () => import('@/components/content/login/Register')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },

];

const router = new VueRouter({
  linkActiveClass: 'is-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
