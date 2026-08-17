<script setup>
import { inject } from 'vue'
import ChildDemo from './ChildDemo.vue'

const msg = inject('msg')

function clickChange() {
    msg.value = '修改后的数据'
}
</script>
<template>
    <div>
        <h3>Child1组件</h3>
        <p>读取数据：{{ msg }}</p>
        <button @click="clickChange">修改数据</button>
        <ChildDemo />
    </div>
</template>
<style scoped></style>