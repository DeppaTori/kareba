<template>
    <div class="vuex-demo">
          <h2>Vuex Demo</h2>
        <counter></counter>
        <todo></todo>
    </div>
  
</template>
<script>
import Counter from './Counter'
import Todo from './Todo'

export default{
    name:'VuexDemo',
    components:{
        Counter,
        Todo
    }
}
</script>