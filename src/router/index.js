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
import Test11 from '../views/Test11.vue' //import引入方式会在页面加载的时候全部引入
// import Test12 from '../views/Test12.vue'
// import Test13 from '../views/Test13.vue'
const Test12 = () =>                    //这种是异步引入  在你使用的时候引入  某些情况可以提高页面加载速度
  import ('../views/Test12.vue')
const Test13 = () =>
  import ('../views/Test13.vue')
const Test14 = () =>
  import ('../views/Test14.vue')
const Test15 = () =>
  import ('../views/Test15.vue')
const Test16 = () =>
  import ('../views/Test16.vue')
const NotFound = () =>
  import ('../views/NotFound.vue')


//注册路由插件
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id?/:type?',
    name: 'About',
    component: About,
    beforeEnter(to,from,next){
      console.log(`beforeEnter:即将进入${to.path}`)
      next()
    }
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
  },
  {
    path: '/test12',
    name: 'Test12',
    component: Test12
  },
  {
    path: '/test13',
    name: 'Test13',
    component: Test13
  },
  {
    path: '/test14/:id(\\d+)?/:type?',
    meta:{
      title:'这是demo14'
    },
    name: 'Test14',
    component: Test14
  },
  {
    path: '/test15',
    name: 'Test15',
    component: Test15
  },
  {
    path: '/test16',
    name: 'Test16',
    component: Test16
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound
  }
]

const router = new VueRouter({
  //使用什么方式切换路由 hash是带有一个/#/
  mode: 'history',
  //根路径
  base: '/',
  routes
})

//全局路由钩子函数
//路由跳转前的钩子函数
router.beforeEach((to,from,next)=>{
  //to 目标路由
  //from 前一个路由
  //next是一个必须执行的方法，执行才能跳转路由
  console.log(`beforeEach : 即将进入${to.path}`)
  next()
})

//路由跳转后的钩子函数  这个有to和from参数  没有next()回调
router.afterEach((to)=>{
  console.log(`afterEach : 进入了${to.path}`)
})

export default router
