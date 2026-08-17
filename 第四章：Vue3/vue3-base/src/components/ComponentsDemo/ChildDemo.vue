<script setup>
import { inject } from 'vue'

const msg = inject('msg')
</script>
<template>
    <div>
        <h3>孙子组件</h3>
        <p>读取数据：{{ msg }}</p>
    </div>
</template>
<style scoped></style>
