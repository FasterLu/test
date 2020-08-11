<template>
    <div>
        <h2>这是一个父子组件传值的页面</h2>
        <my-component1 v-bind:text="message" :word='word'  @callback='getmsg'></my-component1>
        <p>{{getSonMessage}}</p>
    </div>
</template>

<script>
import myComponent1 from '../components/myComponents/myComponent1'
export default {
    name:'test11',
    components:{
        myComponent1
    },
    data(){
        return{
            message:'这是父组件动态传值给子组件',
            word:'这是一段话',
            getSonMessage:''
        }
    },
    methods:{
        getmsg(val){
            this.getSonMessage = val
        }
    }
}
</script>