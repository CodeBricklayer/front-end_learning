<script setup>
import { ref ,nextTick} from 'vue'

// 引用类型数据
const count = ref(0)

async function updateCount() {
  count.value++
  await nextTick()
}
</script>
<template>
  <div>
    <h1>当前计数: {{ count }}</h1>
    <button @click="updateCount">增加</button>
  </div>
</template>
<style scoped></style>