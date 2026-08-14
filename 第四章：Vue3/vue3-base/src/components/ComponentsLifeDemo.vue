<script setup>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref
} from 'vue'

const lifeUrl = new URL('../images/componentsLife.png', import.meta.url).href

const msg = ref("你好")

const updateHandle = () => {
    msg.value = "你好，Vue3"
}

// setup() 本身运行在 beforeCreate 与 created 之间，直接写顶层即可
console.log('组件创建前 / 创建完成')

onBeforeMount(() => {
    console.log('组件挂载前')
})
onMounted(() => {
    console.log('组件挂载完成')
})
onBeforeUpdate(() => {
    console.log('组件更新前')
})
onUpdated(() => {
    console.log('组件更新完成')
})
onBeforeUnmount(() => {
    console.log('组件卸载前')
})
onUnmounted(() => {
    console.log('组件卸载完成')
})
</script>
<template>
    <div>
        组件生命周期
    </div>
    <div>
        <img :src="lifeUrl" alt="">
        <p>{{ msg }}</p>
        <button @click="updateHandle">按钮</button>
    </div>
</template>
<style scoped></style>