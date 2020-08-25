import {increment} from '../mutation-type'
export default{
    namespaced:true,
    state:{
        count:1
    },
    getter:{

    },
    mutations:{
        [increment](state,payload){
            state.count += payload
        }
    },
    actions:{

    }
}