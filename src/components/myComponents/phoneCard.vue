<template>
  <div>
    <h3>商品列表</h3>
      <ul class="ul1">
        <li v-for="(item,index) in phoneData" :key="item.id">
          <div>{{ item.name }}</div>
          <div>{{ item.price }}</div>
          <button @click="addThing(index)">添加至购物车</button>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {addOne} from '../../store/mutation-type'
export default {
    name:'phoneCard',
    computed:{
      ...mapState('phoneCardModule',{
        phoneData:state => state.phone
      })
    },
    methods:{
      addThing(val){
        console.log(val)
        this.$store.commit('shoppingCardModule/' + addOne,val)
      }
    }
}
</script>

<style lang='scss' scoped>
  .ul1{
    display: flex;
    li{
      list-style-type: none;
    }
  }
</style>