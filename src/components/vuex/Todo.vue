<template>
    <div>
         <h2>Todo</h2>
         <div>{{count}}</div>
         <div>Apple : {{appleKu}}</div>
         <div>Todo : {{doneTodos[0].text}}</div>
         <div>Todos Count : {{doneTodosCount}}</div>
          <div>Todo id 2 : {{getTodoId2.text}}</div>
          <div>Todo id 1: {{getTodoById(1).text}}</div>
    </div>
   
</template>
<script>

import {mapState, mapGetters} from 'vuex'

export default{
    name:'Todo',
    
    computed:{
        doneTodosCount(){
            return this.$store.getters.doneTodosCount
        },
        // doneTodos(){
        //     return this.$store.getters.doneTodos
        // },
        getTodoId2(){
            return this.$store.getters.getTodoById(2)
        },
        ...mapState({
            count:state=>state.count,
            appleKu:'apple',
            todos:state=>state.getters.doneTodos
        }),
        ...mapGetters([
            'doneTodos',
            'getTodoById'
        ])
    }
   
}
</script>