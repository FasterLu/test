<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/test2">Test2</router-link> |
      <router-link to="/test3">Test3</router-link> |
      <router-link to="/test4">Test4</router-link> |
      <router-link to="/test5">Test5</router-link> |
      <router-link to="/test6">Test6</router-link> |
      <router-link to="/test7">Test7</router-link> |
      <router-link to="/test8">Test8</router-link> |
      <router-link to="/test9">Test9</router-link> |
      <router-link to="/test10">Test10</router-link> |
      <router-link to="/test11">Test11</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
