import {removeOne} from '../mutation-type'
import {addOne} from '../mutation-type'
export default{
    namespaced:true,
    state:{
        phone:[
            {id:0,name:'iPhoneX',price:"9999.99",num:3},
            {id:1,name:'MacBook Pro',price:"8888.88",num:2},
            {id:2,name:'iPad Pro',price:"6666.66",num:1}
        ]
    },
    getter:{

    },
    mutations:{
        // [increment](state,payload){
        //     state.count += payload
        // }
        // allPrice(state,payload){
        //     state.phone[payload].allPrice = state.phone[payload].price * state.phone.num
        // }
        [removeOne](state,payload){
            state.phone.splice(payload,1)
        },
        [addOne](state,payload){
            state.phone[payload].num += 1
        }
    },
    actions:{

    }
}