<template>
    <div>
        <h2>这是一个父子组件传值的页面</h2>
        <my-component1 
        v-bind:text="message" 
        v-bind:word='word'  
        v-bind:obj='obj'
        v-bind:arr='list'
        @callback='getmsg'></my-component1>
        <p>{{getSonMessage}}</p>

        <my-component2 @getmessagefrom2='aaa'></my-component2>
        <p>{{getSonMessageFrom2}}</p>
    </div>
</template>

<script>
import myComponent1 from '../components/myComponents/myComponent1'
import myComponent2 from '../components/myComponents/myComponent2'
export default {
    name:'test11',
    components:{
        myComponent1,
        myComponent2
    },
    data(){
        return{
            message:'这是父组件动态传值给子组件',
            word:'这是一段话',
            obj:{
                a:1,
                b:2
            },
            list:[1,2,3,4,5],
            getSonMessage:'',
            getSonMessageFrom2:''
        }
    },
    methods:{
        getmsg(val){
            this.getSonMessage = val
        },
        aaa(val){
            this.getSonMessageFrom2 = val
        }
    }
}
</script>