<template>
    <div>

          <h2>Slot</h2>
          <navigation-link url="profile">
    asd
          </navigation-link>
          <base-layout>
            <template #header>
                <h2>Title Here</h2>
            </template>
            <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
          </base-layout>
    </div>
  
    
</template>
<script>
import NavigationLink from './NavigationLink'
import BaseLayout from './BaseLayout'

export default{
    name:'SlotDemo',
    components:{
        NavigationLink,
        BaseLayout
    }
}
</script>