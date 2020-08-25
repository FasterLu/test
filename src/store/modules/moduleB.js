export default{
    namespaced:true,
    state:{
        list:[
            {id:1,name:'张三',sex:1},
            {id:2,name:'李四',sex:1},
            {id:3,name:'小红',sex:0}
        ]
    },
    getters:{
        filterList(state){
            return state.list.map(item =>{
                item.sexName = item.sex === 1 ? "男" : '女'
                return item
            })
        }
    },
    mutations:{

    },
    actions:{
        
    }
}