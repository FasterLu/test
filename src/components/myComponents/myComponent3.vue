<template>
    <div>
        <p>{{title}}</p>
        <slot></slot>
        <slot name="name"></slot>
    </div>
</template>

<script>
export default {
    name:'myComponent3',
    data(){
        return{

        }
    },
    props:['title']
}
</script>

<style lang="scss">

</style>