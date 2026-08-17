<script setup>
import { provide, ref } from 'vue';
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

const msg = ref('测试数据')
provide('msg', msg)
</script>
<template>
    <div>
        <h3>Parent组件</h3>
        <Child1 />
        <Child2 />
    </div>
</template>
<style scoped></style>
