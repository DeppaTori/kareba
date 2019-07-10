<template>
    <div class="vuex-demo">
          <h2>Vuex Demo</h2>
        <counter></counter>
        <todo></todo>
        <module-container></module-container>
    </div>
  
</template>
<script>
import Counter from './Counter'
import Todo from './Todo'
import ModuleContainer from './ModuleContainer'

export default{
    name:'VuexDemo',
    components:{
        Counter,
        Todo,
        ModuleContainer
    }
}
</script>