<template>
  <div id="app">
   
    <router-link :to="{name:'HelloWorld'}">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/todos/1">Sample 1</router-link>
    <router-link to="/todos/2">Sample 2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
