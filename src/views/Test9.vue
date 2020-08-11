<template>
    <div>
        <h2>这是一个发送axios请求的页面</h2>
        <button @click="getMessage">get</button>
        <h4>{{joke}}</h4>
    </div>
</template>

<script>
export default {
    name:'Text8',
    data(){
        return{
            joke:'快点击get按钮获取一个笑话吧'
        }
    },
    methods:{
        getMessage(){
            let _this = this
            this.axios.get('https://autumnfish.cn/api/joke')
            .then(function(response){
                console.log(response.data)
                _this.joke = response.data
            })
        }
    }
}
</script>

<style lang='scss'>

</style>