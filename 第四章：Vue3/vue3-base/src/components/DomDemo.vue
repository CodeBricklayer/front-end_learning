<script setup>
import { useTemplateRef,onMounted,ref } from 'vue'

// vue3.5+ 模板引用：获取 DOM 元素的引用
// const search = useTemplateRef('search')

// vue3.5以前的实现方式
const search = ref(null)

// 组件挂载完成后，将焦点设置到输入框
onMounted(() => {
    search.value.focus()
})
</script>
<template>
    <div>
        <input ref="search" />
    </div>
</template>
<style scoped></style>