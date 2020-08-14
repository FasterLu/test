<template>
  <div class="about">
    <h1>This is an about page</h1>
    <cpt-g></cpt-g>
    <p>{{fullName}}</p>
    <button @click="btn">改变computed计算属性</button>
  </div>
</template>

<script>
export default {
  name:'About',
  data(){
    return{
      firstName:'花',
      lastName:'木兰'
    }
  },
  methods:{
      btn(){
        // this.fullName = this.a + this.b
        console.log(111)
        this.fullName = '刘高胤'
        this.$router.push({
          name:'About',
          params:{
            id:111,
            type:"demo"
          }
        })
      }
  },
  computed:{
    fullName:{
      get(){
        return this.firstName + this.lastName
      },
      set(data){
        this.firstName = data.split('')[0]
        this.lastName = data.split('')[1] + data.split('')[2]
      }
    }
  },
  mounted(){
    console.log('页面加载完成')
  },

  //局部(组件)路由导航钩子
  beforeRouteEnter(to,from,next){
    console.log(`beforeRouteEnter: 即将进入${to.path}`)
    // console.log(this.firstName)  因为是路由钩子 页面还没有加载完成，获取不到this
    //需要在next的回调里面才能获取到
    //next回调页面已经加载完成了  可以看见firstname是打印在页面加载完成后面的
    next((vm) =>{
      console.log(vm.firstName)
    })
  },

  // 这是检测路由更新出发的钩子函数
  beforeRouteUpdate(to,from,next){
    console.log(111)
    next()
  }
}
</script>
