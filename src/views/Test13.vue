<template>
    <div>
        <p>这是一个动态组件的页面</p>
        <button @click="checkData = 'demo1'">组件一</button>
        <button @click="checkData = 'demo2'">组件二</button>
        <!-- 这是用v-if切换 -->
        <!-- <demo1 v-if="checkData == 'demo1'"></demo1>
        <demo2 v-if="checkData == 'demo2'"></demo2> -->

        <!-- 这是动态绑定用:is  keep-alive是为了让组件切换的时候保持不变 -->
        <keep-alive>
            <component :is="checkData"/>
        </keep-alive>
    </div>
</template>

<script>
import demo1 from '../components/myComponents/demo1'
import demo2 from '../components/myComponents/demo2'
    export default {
        name:'test13',
        components:{
            demo1,
            demo2
        },
        data(){
            return{
                checkData: 'demo1'
            }
        }
    }
</script>