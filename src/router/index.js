import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Todos from '@/components/Todos'
import Form from '@/components/Form'
import Display from '@/components/Display'
import General from '@/components/General'
import ComputedProps from '@/components/ComputedProps'
import ClassStyle from '@/components/ClassStyle'
import ComponentDemo from '@/components/ComponentDemo'
import BaseComponentDemo from '@/components/BaseComponentDemo'
import SlotDemo from '@/components/slot/SlotDemo'

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
    },
    {
      path: '/general',
      name: 'General',
      component: General
    },
    {
      path: '/computed',
      name: 'Computed',
      component: ComputedProps
    },
    {
      path: '/classandstyle',
      name: 'ClassStyle',
      component: ClassStyle
    },
    {
      path: '/componentdemo',
      name: 'ComponentDemo',
      component: ComponentDemo
    },
    {
      path: '/basecomponentdemo',
      name: 'BaseComponentDemo',
      component: BaseComponentDemo
    },
    {
      path: '/slot',
      name: 'SlotDemo',
      component: SlotDemo
    }
  ]
})
