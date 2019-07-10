<template>
    <div>
         <h2>Module</h2>
         <div>{{count}}, apple {{apple}}</div>
       
    </div>
   
</template>
<script>

import {createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('account')

export default{
    name:'ModuleContainer',
    
    computed:{
        ...mapState({
            count:state=>state.count,
            apple:state=>state.apple
        })
    }
   
}
</script>