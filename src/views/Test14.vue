<template>
    <div>
        <p>这是一个配置路由的页面</p>
        <p>{{$route.path}}</p>
        <button @click="changePath">点击跳转书籍购物车</button>
    </div>
</template>

<script>
export default {
    name:'test14',
    data(){
        return{

        }
    },
    methods:{
        changePath(){
            //通过js切换
            // this.$router.push('./test7')

            //通过name切换
            // this.$router.push({
            //     name:'Test7',
            //     query:{
            //         name:'liugaoyin'
            //     }
            // })

            //通过path切换 因为切换这个路径的params是配置在路由文件里面的  这里不能传params对象
            this.$router.push({
                path:'test14/333/aaa',
                query:{
                    name:'liugaoyin'
                }
            })
        }
    },
    mounted(){
        console.log(this.$route)
    }
}
</script>