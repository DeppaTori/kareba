<template>
    <div>
        <p>Id: {{todo.id}}</p>
        <p>Title: {{todo.title}}</p>
    </div>
</template>

<script>

import axios from 'axios'

export default{
    name:'Todos',
    data(){
        return {
            todo:[]
        }
    },
    created(){
        this.fetchData()
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/todos/'+this.$route.params.id+'/')
        .then((resp) => {
          this.todo = resp.data
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
        }
    }
}
</script>