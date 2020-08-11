<template>
    <div>
        <h1>绑定class和style</h1>
        <div :class="classA">绑定单个class</div>
        <div :class=[classA,classB] @click="btn">绑定多个class</div>
        <div :style="styleObj">这是绑定style</div>
    </div>
</template>

<script>
export default {
    name:'Test2',
    data(){
        return{
            classA:"current",
            classB:'current2',
            styleObj:{
                color:'red',
                fontSize:'30px'
            }
        }
    },
    methods:{
        btn(){
            if(this.classA == 'current'){
                this.classA = 'change'
            }else{
                this.classA = 'current'
            }
        }
    },
    mounted(){
        let that = this
        setTimeout(function(){
            that.styleObj.color = 'black'
        },3000)
    }
}
</script>

<style lang="scss">
    .current{
        width: 200px;height: 200px;
        background-color: green;
        margin: auto
    }
    .current2{
        border: 1px solid black
    }
    .change{
        width: 200px;height: 200px;
        background-color: brown;
        margin: auto
    }
</style>