<template>
    <div class="blog-post">
          <h3>{{post.title}}</h3>
          <button v-on:click="$emit('enlarge-text',0.01)">
              Enlarge Text
          </button>
           <!-- <button v-on:click="$emit('enlarge-text')">
              Enlarge Text
          </button> -->
          <div v-html="post.content"></div>
    </div>
  
</template>

<script>
export default{
    name:'BlogPost',
    props:['post']
}
</script>