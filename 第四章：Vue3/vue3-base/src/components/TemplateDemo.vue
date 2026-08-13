<script setup>
import { ref } from 'vue'

const msg = ref('Hello 模板语法')

const box = ref("<a href='https://www.baidu.com'>我是盒子</a>")

const currentId = ref("mybox-1")

const myClass = ref("myclass")
const number = ref(100)
const ok = ref(true)
const message = ref("hello vue3")
const id = ref(1)
</script>

<template>
    <!-- 插值表达式 -->
    <span>Message: {{ msg }}</span>
    <button @click="msg = '我是新的数据'">更改数据</button>
    <div>{{ box }}</div>
    <!-- v-html 指令 -->
    <div v-html="box"></div>

    <!-- 属性绑定 -->
    <div :id="currentId" :class="myClass">哈哈</div>

    <!-- 支持 JavaScript 单表达式 -->
    <div>{{ 1 + 1 }}</div>
    <div>{{ number + 1 }}</div>
    <div>{{ ok ? '是' : '否' }}</div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div :id="`list-${id}`"></div>
</template>
<style scoped></style>