<template>
  <div class="about">
    <h1>绑定数据v-bind</h1>
    <p>{{message}}</p>
    <span>{{date + ":" + message}}</span>
    <div v-bind:title="title">这是一个div</div>
  </div>
</template>

<script>
  export default{
    name:'Test',
    data(){
      return{
        message:"今天星期六",
        date:"日期",
        title:"这是一个div"
      }
    },
    mounted(){
      let that = this
      setTimeout(function(){
        that.message = "明天星期天"
      },1000)
    }
  }
</script>

<style lang="scss">
  .about {
    border: 1px solid black;
    h1 {
        color: yellow
    }
  }
</style>