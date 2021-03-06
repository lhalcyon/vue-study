import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Demo4'
import Demo5 from '@/components/Demo5'
import Demo6 from '@/components/Demo6'
import Demo7 from '@/components/Demo7'
import Demo8 from '@/components/Demo8'
import AutoPackageEmail from '@/components/AutoPackageEmail'
import DemoMain from '@/components/DemoMain'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemoMain',
      component: DemoMain,
      children:[
        {
          path: '/1',
          component: Demo1
        },
        {
          path: '/2',
          component: Demo2
        },
        {
          path: '/3',
          component: Demo3
        },
        {
          path: '/4',
          component: Demo4
        },
        {
          path: '/5',
          component: Demo5
        },
        {
          path: '/6',
          component: Demo6
        },
        {
          path: '/7',
          component: Demo7
        },
        {
          path: '/8',
          component: Demo8
        },
        {
          path: '/9',
          component: AutoPackageEmail
        }
      ]
    }
  ]
})
