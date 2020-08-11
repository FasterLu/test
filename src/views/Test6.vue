<template>
    <div>
        <div @click="fatherClick">
            父级
            <div @click.stop="sonClick1">子级1</div>
            <div @click="sonClick2">子级2</div>
            <div @click.right.prevent="sonClick3">子级3</div>
        </div>
        <cpt-g></cpt-g>
        <box-g></box-g>
    </div>
</template>

<script>
    export default{
        name:'Test6',
        data(){
            return{

            }
        },
        methods:{
            fatherClick(){
                console.log('父级')
            },
            sonClick1(){
                console.log('子级1')
            },
            sonClick2(){
                console.log('子级2')
            },
            sonClick3(){
                console.log('右键')
            }
        }
    }
</script>

<style lang="scss">

</style>