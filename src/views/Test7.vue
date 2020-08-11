<template>
    <div>
        <h2>计算属性</h2>
        <table>
            <thead>
                <tr>
                    <th v-for="(item,index) in title" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in message" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td>{{"《" + item.name + "》"}}</td>
                    <td>{{"￥" + item.prise}}</td>
                    <td><button @click="addNum(index)">+</button>
                        <button @click="subNum(index)">-</button></td>
                    <td>{{item.allNum}}</td>
                    <td>{{item.prise * item.allNum}}</td>
                    <td class="spanBox"><span class="span" v-for="(item2,arrIndex) in item.arr1" :key="arrIndex">{{item2}}</span></td>
                    <td><button @click="remove(index)">移除</button><button>编辑</button></td>
                </tr>
            </tbody>
        </table>
        <div :style="{textAlign:'left'}">{{"所有书籍的总价为:" + allPrise}}</div>
        <form action="">
            请输入书籍名称:<input type="text" v-model="name"><br>
            请输入书籍单价:<input type="text" v-model="prise"><br>
            请输入书籍总数:<input type="text" v-model="num"><br>
            <button @click.prevent="addBook">点击添加书籍</button>
        </form>
    </div>
</template>

<script>
    export default{
        name:"Test7",
        data(){
            return{
                title:["编号","书名","单价","增减","总数","总计",'书籍描述',"操作"],
                message:[
                    {id:1,name:"编程珠玑",prise:36,allNum:2,arr1:['代码全面','喜欢']},
                    {id:2,name:"代码大全",prise:54,allNum:1,arr1:['代码全面','喜欢']},
                    {id:3,name:"JavaScript",prise:22,allNum:1,arr1:['代码全面','喜欢']},
                    {id:4,name:"函数进阶",prise:36,allNum:1,arr1:['代码全面','喜欢']}
                ],
                id:'',
                name:"",
                prise:"",
                num:""
            }
        },
        methods:{
            addNum(index){
                this.message[index].allNum += 1
            },
            subNum(index){
                if(this.message[index].allNum == 0){
                    return
                }else{
                    this.message[index].allNum -= 1
                }
            },
            remove(index){
                this.message.splice(index,1)
            },
            addBook(){
                if(this.name == "" || this.prise == "" || this.num == ""){
                    alert("不能为空")
                }else{
                    let obj = {}
                    obj.id = Date.now()
                    obj.name = this.name
                    obj.prise = parseInt(this.prise)
                    obj.allNum = parseInt(this.num)
                    console.log(obj)
                    this.message.unshift(obj)
                    this.id = ""
                    this.name = ""
                    this.prise = ""
                    this.num = ""
                }
            }
        },
        computed:{

        //这是用到了闭包传参来进行运算,计算某一本书数量与单价的和
        //     addPrise(){
        //         return function(index){
        //         return parseInt(this.message[index].prise) * this.message[index].allNum
        //         }
        //     }

        allPrise(){
            let allPrise = 0
            for(let i=0;i<this.message.length;i++){
                allPrise += this.message[i].prise * this.message[i].allNum
            }
            return allPrise
        }
        }
    }
</script>

<style lang="scss">
    .spanBox{
        display: flex;
        justify-content: space-between;
        .span{
            border: 1px solid black
        }
    }
</style>