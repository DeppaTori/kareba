<template>
    <div class="component-demo">
        <div :style="{fontSize:postFontSize+'em'}">
            <h2>Component Demo</h2>
                    <BlogPost title="Good Morning Vue"></BlogPost>
                    <!-- <BlogPost 
                        v-for="post in posts"
                        v-bind:key="post.id"
                        v-bind:post="post"
                        v-on:enlarge-text="postFontSize +=0.1"
                    ></BlogPost> -->
                    <BlogPost 
                        v-for="post in posts"
                        v-bind:key="post.id"
                        v-bind:post="post"
                        v-on:enlarge-text="postFontSize +=$event"
                    ></BlogPost> 
        </div>
     
    </div>
</template>

<script>

import BlogPost from './component-demo/BlogPost';

export default{
    name:'ComponentDemo',
    data:function(){
        return {
            posts:[
                {id:1,title:'My Journey with Vue',content:'Content of My Journey with Vue'},
                {id:2,title:'Blogging with Vue',content:'Content of Blogging with Vue'},
                {id:3,title:'Vue is fun',content:'Content of Vue is fun'}
            ],
            postFontSize:1
        };
    },
    components:{
        BlogPost
    }
}
</script>