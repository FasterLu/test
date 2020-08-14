<template>
  <div>
      <p>这是一个插槽的demo</p>
      <my-component3 v-bind:title="msg">
          <div>这是用slot添加的一段HTML代码</div>
          <template v-slot:name>
            <div>刘高胤</div>
          </template>
      </my-component3>
  </div>
</template>

<script>
import myComponent3 from '../components/myComponents/myComponent3'
export default {
    name:'test12',
    components:{
        myComponent3
    },
    data(){
        return{
            msg:'这是一个插槽的demo'
        }
    }
}
</script>

<style>

</style>