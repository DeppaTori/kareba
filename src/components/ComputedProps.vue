<template>
    <div class="template-syntax">
        <h2>Computed </h2>
        <p>Original Message : "{{message}}"</p>
        <p>Computed Reverse Message: "{{reversedMessage}}"</p>
        <p>Full Name : {{fullName}}</p>
    </div>
</template>

<script>


export default{
    name:'ComputedProps',
    data () {
        return {
            message:'Good Morning!!!',
            firstName:'Tamara',
            lastName:'Rara'
        }
    },
    methods:{
        dateMethod:function(){
            return Date.now()
        }
    },
  
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        },
        dateComputed:function(){
            return Date.now()
        },
        fullName:{
            get:function(){
                return this.firstName+' '+this.lastName
            },
            set:function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length-1]
            }
        }
    }
   
    
    
}
</script>