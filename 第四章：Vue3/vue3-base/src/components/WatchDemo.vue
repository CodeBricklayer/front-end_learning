<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('你的回答')

// 监听 question 变化，根据新的 question 值更新 answer
watch(question, (newVal, oldVal) => {
    if (newVal === 'Yes') {
        answer.value = '你回答了Yes'
    } else if (newVal === 'No') {
        answer.value = '你回答了No'
    }
})
</script>
<template>
    <div>
        <p>问题发生变化的时候，回答也要发生变化</p>
        <p>请回答Yes 或 No</p>
        <input type="text" id="question" v-model.lazy="question" />
        <p>回答：{{ answer }}</p>
    </div>
</template>
<style scoped></style>