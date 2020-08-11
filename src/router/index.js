import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'
import Test4 from '../views/Test4.vue'
import Test5 from '../views/Test5.vue'
import Test6 from '../views/Test6.vue'
import Test7 from '../views/Test7.vue'
import Test8 from '../views/Test8.vue'
import Test9 from '../views/Test9.vue'
import Test10 from '../views/Test10.vue'
import Test11 from '../views/Test11.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'Test3',
    component: Test3
  },
  {
    path: '/test4',
    name: 'Test4',
    component: Test4
  },
  {
    path: '/test5',
    name: 'Test5',
    component: Test5
  },
  {
    path:'/test6',
    name:"Test6",
    component: Test6
  },
  {
    path: '/test7',
    name: 'Test7',
    component: Test7
  },
  {
    path: '/test8',
    name: 'Test8',
    component: Test8
  },
  {
    path: '/test9',
    name: 'Test9',
    component: Test9
  },
  {
    path: '/test10',
    name: 'Test10',
    component: Test10
  },
  {
    path: '/test11',
    name: 'Test11',
    component: Test11
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
