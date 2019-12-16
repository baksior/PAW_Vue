import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Board from '@/components/Board'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/:id',
      name: 'BoardById',
      component: Board
    },
    {
      path: '/board/:id/card/:cardId',
      name: 'BoardByIdWithCardId',
      component: Board
    }
  ],
  data: {
    currentRoute: window.location.pathname
  }
})
