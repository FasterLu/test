<template>
  <div>
      <p>这是一个组件22222</p>
      <button @click="btn">点击传值给父组件</button>
  </div>
</template>

<script>
export default {
    name:'myComponent2',
    data(){
        return{
            message:'这是子组件传给父组件的一句话'
        }
    },
    methods:{
        btn(){
            console.log(111)
            this.$emit('getmessagefrom2',this.message)
        }
    }
}
</script>

<style>

</style>