import cptG from "./cpt-g"
import boxG from './box-g'

const components = {
    cptG,
    boxG
}

const install = function(Vue){
    for (let key in components) {
        Vue.component(components[key].name, components[key])
      }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(Window.vue)
  }
  
  components.install = install
  
  export default components