<script setup>
import { computed, reactive, ref } from 'vue'

// 引用类型数据
const number = ref(100)
const flag = ref(false)

const author = reactive({
    name: "孙悟空",
    books: ['西游记', '东游记', '西游前传']
})

// 计算属性
const hasBooks = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})
</script>
<template>
    <div>
        <h1>{{ number + 1 }}</h1>
        <h1>{{ flag ? '孙悟空' : '六耳猕猴' }}</h1>
        <p>已有书籍：</p>
        <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
        <span>{{ hasBooks }}</span>
    </div>
</template>
<style scoped></style>