<script setup>
import { ref } from 'vue'

// 引用类型数据
const count = ref(0)

// 事件处理函数
function updateCount() {
    count.value++
}

// 事件对象函数
function updateTextHandle(event) {
    console.log(event.target)
    event.target.innerText = '点击了按钮'
}

const myText = ref('hello vue3')

// 事件参数传递函数
function sendHandle(text, event) {
    event.target.innerText = text
}

// 事件修饰符函数
// 一次点击
function doThis() {
    console.log('一次点击')
}

// 按键修饰符函数
// 按下Enter键
function doThis2() {
    console.log('按下Enter键')
}
</script>
<template>
    <div>
        <h1>当前计数: {{ count }}</h1>
        <!-- 方法事件处理函数 -->
        <button @click="updateCount">方法增加</button>
        <!-- 内联事件处理函数 -->
        <button @click="count++">内联增加</button>
        <!-- 事件对象 -->
        <button @click="updateTextHandle">点击我</button>
        <!-- 事件参数传递 -->
        <div>
            <p>{{ myText }}</p>
            <button @click="sendHandle(myText, $event)">发送</button>
        </div>
        <!-- 事件修饰符  点击事件最多被触发一次-->
        <button @click.once="doThis">点击我</button>

        <!-- 按键修饰符 -->
        <input @keyup.enter="doThis2" />
    </div>
</template>
<style scoped></style>