<script setup>
import { reactive } from 'vue'

// 响应式数据
const state = reactive({
  age: 30
})

function updateAge() {
  state.age++
}
</script>
<template>
  <div>
    <h1>当前年龄: {{ state.age }}</h1>
    <button @click="updateAge">增加</button>
  </div>
</template>
<style scoped></style>