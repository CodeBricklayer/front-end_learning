<script setup>
</script>
<template>
    <div>
        <h1>列表页</h1>
        <ul>
            <li><router-link to="/list/item1">列表子页1</router-link></li>
            <li><router-link to="/list/item2">列表子页2</router-link></li>
        </ul>
        <RouterView />
    </div>
</template>
<style scoped></style>