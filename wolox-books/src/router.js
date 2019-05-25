import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import BookDetails from './views/BookDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/book_details/:id',
      name: 'book_details',
      component: BookDetails
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
