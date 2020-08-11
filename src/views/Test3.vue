<template>
    <div>
        <h1>这是v-if v-show条件判断</h1>
        <h2 v-if="check">这是一个v-if的判断</h2>
        <h2 v-else-if="check2">这是一个v-if-else的判断</h2>
    </div>
</template>

<script>
    export default{
        name:'Test3',
        data(){
            return{
                check:false,
                check2:true
            }
        },
        mounted(){
            let that = this
            setTimeout(function(){
                that.check = true
            },5000)
        }
    }
</script>

<style lang="scss">
    
</style>