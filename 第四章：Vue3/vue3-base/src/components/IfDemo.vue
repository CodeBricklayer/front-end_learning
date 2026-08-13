<script setup>
import { ref } from 'vue'

const flag = ref(true)
</script>
<template>
    <div>
        <!-- 基于DOM的显示/隐藏 -->
       <p v-if="flag">孙悟空</p>
       <p v-else>六耳猕猴</p>
       <button @click="flag = !flag">谛听</button>
       <!-- 基于CSS的显示/隐藏 -->
       <p v-show="flag">齐天大圣</p>
    </div>
</template>
<style scoped></style>
