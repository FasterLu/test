<template>
  <div>
      <p>这是手机购物车组件</p>
      <ul class="ul1">
        <li v-for="(item,index) in shoppingApple" :key="item.id" v-show="item.num !== 0">
          <span>{{ item.name}}</span>   X  {{item.price + 'X'}}
          <input type="text" v-model="item.num"> = {{item.price * item.num}}
          <button @click="remove(index)">删除</button>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { removeOne } from '../../store/mutation-type'
export default {
    name:'shoppingCard',
    computed:{
      ...mapState('shoppingCardModule',{
        shoppingApple:state => state.phone
      })
    },
    methods:{
      remove(val){
        console.log(val)
        this.$store.commit('shoppingCardModule/' + removeOne,val)
      }
    }
}
</script>

<style lang="scss" scoped>
  .ul1{
    li{
      span{
        font-size: 20px;color: rebeccapurple;
      }
    }
  }
</style>