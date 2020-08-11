<template>
    <div>
        <h1>这是一个v-for的遍历</h1>
        <div v-for="(item,index) in arr" :key="index">{{index + ':' + item}}</div>
        <hr>
        <div v-for="(item,key,index) in obj" :key="key">{{index + ":" + key + item}}</div>
        <hr>
        <ul>
            <li v-for="item in arrObj" :key="item.id" :style="{textAlign:'left'}">{{item.new}}</li>
        </ul>

        <hr>
        <div>{{user.name}} | <input type="text" v-model="user.age"> | 
            <button @click="addBtn">点击添加属性</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Test4",
        data(){
            return{
                arr:[1,2,3,4,5],
                obj:{
                    name:'刘高胤',
                    age:23,
                    sex:'男'
                },
                arrObj:[
                    {id:1,new:'最强考试王'},
                    {id:2,new:'我们花了3年时间，把这群恶人送进监狱'},
                    {id:3,new:'大家好，我是EDG.Clearlove'},
                    {id:4,new:'woc！60年前的电影太能撩了'},
                    {id:5,new:'敢 杀 我 的 马? !'}
                ],
                user:{
                    name:'张三'
                }
            }
        },
        methods:{
            addBtn(){
                console.log(111)
                this.$set(this.user,'age',18)
            }
        }
    }
</script>

<style lang="scss">

</style>