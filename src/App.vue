<template>
  <div id="app">
    <h1>Kareba</h1>
    <p>Simple Vue Application </p>
    <router-link :to="{name:'HelloWorld'}">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/todos/1">Axios Sample 1</router-link>
    <router-link to="/todos/2">Axios  Sample 2</router-link>
    <router-link to="/form">Store Form</router-link>
    <router-link to="/display">Store Display</router-link>
    <router-link to="/general">General</router-link>
     <router-link to="/computed">Computed</router-link>
      <router-link to="/classandstyle">Class and Style</router-link>
       <router-link to="/componentdemo">Component Demo</router-link>
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
