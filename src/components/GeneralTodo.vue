<template>
    <li>
        {{todo.text}}
    </li>
</template>
<script>
export default{
    name:'GeneralTodo',
    props:['todo']
}
</script>