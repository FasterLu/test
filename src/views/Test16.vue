<template>
  <div>
      <p>这是一个vuex的小案例1</p>
      <phone-card></phone-card>
      <shopping-card></shopping-card>
  </div>
</template>

<script>
import phoneCard from '../components/myComponents/phoneCard'
import shoppingCard from '../components/myComponents/shoppingCard'
export default {
    name:'test16',
    components:{
        phoneCard,
        shoppingCard
    }
}
</script>

<style lang='scss' scoped>

</style>