<template>
  <div>
      <h2>这是一个vuex状态管理的页面</h2>
      <p>{{num}}</p>
      <p>{{count1}}</p><br>
      <button @click="add(1)">+1</button>
      <button @click="add2(2)">+2</button><br>
      <ul>
          <li v-for="item in list" :key="item.id">{{item.name}}</li>
      </ul>

      <ul>
          <li>这是一个列表</li>
          <li v-for="item in filterList1" :key="item.id">
              {{item.name}} -- {{item.sexName}}
          </li>
      </ul><br>
      <ul>
          <li v-for="item in filterList2" :key="item.id">
              {{item.name}} -- {{item.sexName}}
          </li>
      </ul><br>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
import {increment} from '../store/mutation-type'
export default {
    name:'test15',
    computed:{
        num(){
            return this.$store.state.moduleA.count
        },
        ...mapState('moduleA',{
            count1:state => state.count,
        }),
        list(){
            return this.$store.state.moduleB.list
        },
        filterList1(){
            return this.$store.getters['moduleB/filterList']
        },
        ...mapGetters('moduleB',{
            filterList2:'filterList'
        })
    },
    methods:{
        add(val){
            this.$store.commit('moduleA/' + increment,val)
        },
        ...mapMutations('moduleA',{
            add2:increment
        })
    }
}
</script>

<style>

</style>