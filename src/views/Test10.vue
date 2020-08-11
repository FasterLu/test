<template>
    <div>
        <h2>这是一个过滤器和自定义指令的页面</h2>
        <p>{{ message | upperCase}}</p>
        <p>{{message | upperCase}}</p>
        <input type="text" v-focus>
        <div class="moveBox" v-move>这是一个可以拖拽的div</div>
    </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
    name:'test10',
    data(){
        return{
            message:'dascassafcasdas'
        }
    },
    // filters:{
    //     upperCase(val){
    //         return val.toUpperCase()
    //     }
    // }
    directives:{
        focus:{
            inserted(el){
            el.focus()
        }
        },
        move:{
            inserted(el){
                let A = function(ev){
                    console.log(ev)
                    let currentX = el.offsetLeft
                    let currentY = el.offsetTop
                    let downX = ev.clientX
                    let downY = ev.clientY
                    let C = function(ev){
                        let x = ev.clientX - downX + currentX + 'px'
                        let y = ev.clientY - downY + currentY + 'px'
                        el.style.left = x;
                        el.style.top = y;
                    }
                    let B = function(){
                    document.removeEventListener('mousemove',C,false)
                    console.log('bbb')
                }
                    document.addEventListener('mousemove',C,false)
                    document.addEventListener('mouseup',B,false)
                }
                el.addEventListener('mousedown',A,false)
            }
        }
    }
}
</script>

<style lang="scss">
    .moveBox{
        width: 200px;
        height: 200px;
        border: 1px solid black;
        position: absolute;
    }
</style>