<template>
    <div>
        <h1>Form</h1>
    <label for="name">Name :</label>
    <input @input="changed" name="name">
      <p>Name : {{$store.getters.name}}</p>
    </div>  
</template>
<script>
export default{
    name:'Form',
    methods:{
        changed:function(event){
           this.$store.commit('change',event.target.value)
        }
    }
}
</script>