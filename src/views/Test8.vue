<template>
    <div>
        <h2>这是一个v-modle的页面</h2>
        <input type="text" v-model="inputWrite">
        <div>{{inputWrite}}</div>

        <select name="" id="" v-model="checkCity">
            <option value="">请选择</option>
            <option v-for="item in citys" :key="item.code" :value="item.code">{{item.name}}</option>
        </select>
        <div>{{cityName}}</div>

        <div>
            <input type="radio" name="checkSex" id="" v-model="sex" value="male"> 男
            <input type="radio" name="checkSex" id="" v-model="sex" value="female"> 女
            <div>{{sex}}</div>
        </div>

        <div>
            <input type="checkbox" name="" id="" v-model="checkBox1">{{checkBox1}}<br>
            <input type="checkbox" name="aaa" id="" value="cf" v-model="checkBox2">吃饭
            <input type="checkbox" name="aaa" id="" value="sj" v-model="checkBox2">睡觉
            <input type="checkbox" name="aaa" id="" value="ddd" v-model="checkBox2">打豆豆<br>
            <span>{{checkBox2.toString()}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Text8',
    data(){
        return{
            inputWrite:'12345',
            citys:[
                {name:'北京',code:'bj'},
                {name:'上海',code:'sh'},
                {name:'广州',code:'gz'},
                {name:'深圳',code:'sz'}
            ],
            checkCity:'',
            sex:'male',
            checkBox1:false,
            checkBox2:[]
        }
    },
    computed:{
        cityName(){
            let a = this.citys.find(city => city.code === this.checkCity)
            return a ? a.name : ""
        }
    }
}
</script>

<style lang='scss'>

</style>