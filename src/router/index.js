import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/router-component/User'
import UserProfile from '@/components/router-component/user/UserProfile'
import UserPost from '@/components/router-component/user/UserPost'
import UserHome from '@/components/router-component/user/UserHome'
import Login from '@/components/router-component/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '/profile',
          component: UserProfile
          
        },
        {
          path: 'posts',
          component: UserPost,
          meta: { requiresAuth: true }
        },
        {
          path: '',
          component: UserHome
        }
      ]
    }
  ]
})
