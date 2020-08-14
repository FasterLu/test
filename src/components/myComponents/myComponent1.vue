<template>
    <div>
        <p>这是一个子组件的一段话</p>
        <p>{{text}}</p>
        <!-- <p>{{obj.a}} - {{obj.b}}</p>
        <p>{{arr.join(',')}}</p> -->
        <div>{{msg}} <button @click="btn">点击改变</button></div>
        <br>
        <br>
        <input type="text" v-model="message">
        <button @click="submit">点击子组件传值给父组件</button>
    </div>
</template>

<script>
export default {
    name:'myComponent1',
    // props:['text','word','obj','arr'],
    props:{
        text:{
            type:String,
            // required:true,        这是设置是否必传
            default:'这是一个默认的字符串' //没传时的默认值
        },
        word:{
            type:String
        },
        obj:{
            type:Object
        },
        arr:{
            type:Array
        }
    },
    data(){
        return{
            msg:this.text,
            message:this.word
        }
    },
    methods:{
        btn(){
            this.msg = "这是改变过的数据"
        },
        submit(){
            this.$emit('callback',this.message)
        }
    }
}
</script>