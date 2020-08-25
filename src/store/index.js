import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import phoneCardModule from './modules/phoneCardModule'
import shoppingCardModule from './modules/shoppingCardModule'
// import {increment} from './mutation-type'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    moduleA,
    moduleB,
    phoneCardModule,
    shoppingCardModule
  }
  // state: {
  //   count:1,
  //   list:[
  //     {id:1,name:'张三',sex:1},
  //     {id:2,name:'李四',sex:1},
  //     {id:3,name:'小红',sex:0}
  //   ]
  // },
  // getters:{
  //   filterList(state){
  //     return state.list.map(item =>{
  //       // item.sexName = item.sex === 1 ? "男" : '女'
  //       if(item.sex === 1){
  //         item.sexName = '男'
  //       }else{
  //         item.sexName = '女'
  //       }
  //       return item
  //     })
  //   }
  // },
  // mutations: {
  //   increment(state,payload){
  //     state.count += payload
  //   }
  // },
  // actions: {
    
  // },
  // modules: {
  // }
})
