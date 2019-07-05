<template>
    <div class="blog-post">
            <span>{{likes}}</span>
    <h3>{{post.title}}</h3> 
                <div v-html="post.content"></div>
    </div>
  
</template>

<script>
export default{
    name:'PropTypesComponent',
    props:{
        likes:Number,
        post:Object
    }
   

}
</script>