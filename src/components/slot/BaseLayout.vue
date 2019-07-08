<template>
<div class="container">
  <header class="header">
    <slot name="header"></slot>
  </header>
  <main>
    <slot class="main">Main here</slot>
  </main>
  <footer>
    <slot name="footer" class="footer"></slot>
  </footer>
</div>
</template>
<script>
export default{
    name:'BaseLayout'
}
</script>
<style scoped>
.header{
    border:1px solid black;
    padding:20px;
    margin:20px;
    color:cadetblue;
}
</style>