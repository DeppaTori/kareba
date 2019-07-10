<template>
    <div>
         <div>{{count}}</div>
    <!-- <div>{{apple.text}}</div> -->
    </div>
   
</template>
<script>

import {mapState, mapMutations,mapActions} from 'vuex'

export default{
    name:'Counter',
    created(){
         this.$store.commit('myIncrement',10)
        //   this.$store.commit('myIncrement',5)
        //    this.$store.commit('myIncrement',6)
           this.$store.commit({
               type:'payloadIncrement',
               amount:10,
               extraAmount:5
           })
             this.add({
                 amount:10,
                 extraAmount:10
             })
             this.$store.dispatch('increment')
             this.$store.dispatch('incrementAsync')
             this.actionAdd()
             this.$store.dispatch('actionA').then(()=>{
               console.log("Action A done")
             })
             this.$store.dispatch('actionB')
    },
    computed:mapState({
        count:state=>state.count,
        countAlias:'count'

    }),
    methods:{
        ...mapMutations({
            add:'payloadIncrement'
    }),
        ...mapActions({
           actionAdd:'increment' 
        })
    }
   
}
</script>