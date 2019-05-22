import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
