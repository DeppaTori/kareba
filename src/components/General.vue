<template>
    <div class="general">
        <h1>General</h1>
        <span v-if="seen">Now you see me</span>
        <ol>
            <li v-for="todo in todos">
                {{todo.text}}
            </li>
        </ol>
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
        <input v-model="message">
      <ol>
        <GeneralTodo 
            v-for="todo in todos" 
            v-bind:todo = "todo"
            v-bind:key = "todo.id"
        ></GeneralTodo>
    </ol>
        <button v-bind:disabled="isButtonDisabled">Disabled Button</button>
    </div>
</template>

<script>
import GeneralTodo from './GeneralTodo'


export default{
    name:'General',
    data () {
        return {
            seen:true,
            todos:[
                {id:0, text:'Learn Javascrpt'},
                {id:1, text:'Learn Vue'},
                {id:2, text:'Build Something awesome'}
            ],
            message:'Hello Vue.js!',
            isButtonDisabled:true
        }
    },
   
    methods:{
        reverseMessage:function(){
                        this.message = this.message.split('').reverse().join('')
                    }
    },
    components:{
        GeneralTodo
    },
    created:function(){
        console.log('This data');
        console.log(this.todos);
    }
        
    
}
</script>