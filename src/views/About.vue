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
  }
}
</script>
