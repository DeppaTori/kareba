<template>
    <div>
         <div>{{count}}</div>
    <!-- <div>{{apple.text}}</div> -->
    </div>
   
</template>
<script>

import {mapState} from 'vuex'

export default{
    name:'Counter',
    // state:{
    //     count:0,
    //     localCount:0
    // },
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // }
    computed:mapState({
        count:state=>state.count,
        countAlias:'count'

    })
    //  computed: mapState([
    // // map this.count to store.state.count
    // 'count'
    // ])
}
</script>