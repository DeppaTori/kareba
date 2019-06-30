import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Todos from '@/components/Todos'
import Form from '@/components/Form'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/todos/:id',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    }
  ]
})
