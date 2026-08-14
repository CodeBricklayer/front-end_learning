<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: {
        type: String,
        default: '默认值'
    }
})
</script>
<template>
    <div>
        <h3>Child组件</h3>
        <p>{{ text }}</p>
    </div>
</template>
<style scoped></style>
