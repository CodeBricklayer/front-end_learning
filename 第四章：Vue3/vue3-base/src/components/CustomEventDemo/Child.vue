<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['someEvent'])

function clickHandle(data) {
    emit('someEvent', data)
}
</script>
<template>
    <div>
        <h3>Child组件</h3>
        <button @click="clickHandle('子组件传递的数据')">子组件传递</button>
    </div>
</template>
<style scoped></style>