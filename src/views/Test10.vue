<template>
    <div>
        <h2>这是一个过滤器和自定义指令的页面</h2>
        <p>{{ message | upperCase}}</p>
        <p>{{message | upperCase}}</p>
        <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    name:'test10',
    data(){
        return{
            message:'dascassafcasdas'
        }
    },
    // filters:{
    //     upperCase(val){
    //         return val.toUpperCase()
    //     }
    // }
    directives:{
        focus:{
            inserted(el){
            el.focus()
        }
        }
    }
}
</script>

<style lang="scss">

</style>