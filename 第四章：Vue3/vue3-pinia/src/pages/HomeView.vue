<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useCounterStore } from '@/stores/counter'

// 引入pinia状态
const counter = useCounterStore()

// 增加pinia状态,触发响应式更新
const updateCounter = () => {
    counter.increment()
}

// 获取当前实例
const instance = getCurrentInstance()
// 修改全局变量，但是不会触发响应式更新
const changeMessage = () => {
    instance.appContext.config.globalProperties.$message = 'hello vue3'
    console.log(instance.appContext.config.globalProperties.$message)
}
</script>
<template>
    <div>
        <h1>首页</h1>
        <p>
            全局变量：{{ $message }}
        </p>
        <button @click="changeMessage">修改全局变量</button>
        <hr>
        <p>
            pinia状态：{{ counter.count }}
        </p>
        <button @click="updateCounter">增加</button>
    </div>
</template>
<style scoped></style>
