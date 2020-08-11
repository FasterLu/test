<template>
    <div>
        <h1>这是v-on绑定事件的页面</h1>
        <div>{{num}}</div>
        <button @click="add">点击加1</button>
        <button @click="reduce">点击减1</button>
        <button @click="reduce(2,$event)">点击减2</button>

        <hr>
        <div v-if="isShow">isShow为true</div>
        <div v-else>isShow为false</div>
        <button @click="changeBtn">点击切换</button>

        <hr>
        <ul class="ul">
            <li v-for="(item,index) in arr" :key="index">{{item.new}} <button @click="delBtn(index)">删除</button></li>
        </ul>
        <button @click="editNews">点击修改第一条新闻</button>

        <hr>

        <h2>{{restTime}}</h2>

        <hr>
        <ul><li v-for="(item,index) in arr2" :key="index">{{item}}</li></ul>
        <button @click="editArr">点击修改</button>
    </div>
</template>

<script>
export default {
    name:'Test5',
    data(){
        return{
            num:0,
            isShow:true,
            arr:[
                {id:1,new:'最强考试王'},
                {id:2,new:'我们花了3年时间，把这群恶人送进监狱'},
                {id:3,new:'大家好，我是EDG.Clearlove'},
                {id:4,new:'woc！60年前的电影太能撩了'},
                {id:5,new:'敢 杀 我 的 马? !'}
            ],
            arr2:[2,3,4,5],
            restTime:''
        }
    },
    methods:{
        add(){
            this.num ++
        },
        reduce(val,event){
            console.log(event)
            if(typeof val == 'number'){
                this.num = this.num - 2
            }else{
                this.num --
            }
        },
        changeBtn(){
            this.isShow = !this.isShow
        },
        delBtn(index){
            console.log(index)
            this.arr.splice(index,1)
        },
        editNews(){
            // console.log(111)
            // this.arr[0].new = '这是更新后的新闻'
            // console.log(this.arr)

            // this.arr[0] = {
            //     id:Date.now(),
            //     new:"这是更新后的新闻222"
            // }
            // console.log(this.arr)

            this.$set(this.arr,0,{
                id:Date.now(),
                new:"这是更新后的新闻333"
            })
            console.log(this.arr)
            console.log(JSON.parse(JSON.stringify(this.arr)))
        },
        editArr(){
            // this.arr2[0] = 1
            // console.log(this.arr2)
            this.$set(this.arr2,1,100)
        }
    },
    mounted(){
        let startTime;
        let endTime;
        let time;
        setInterval(() => {
            startTime = Date.now()
            endTime = new Date('2020/08/01 00:00:00').getTime()
            time = parseInt((endTime-startTime)/1000)
            this.restTime = "距离下个月还有" + parseInt(time/60/60/24) + "天" + parseInt(time/60/60%24) + "小时" + parseInt(time/60%60) + "分钟" + parseInt(time%60) + '秒'
        }, 1000);
    }
}
</script>

<style lang="scss">
.ul{
    li{
        text-align: left;
    }
}
</style>