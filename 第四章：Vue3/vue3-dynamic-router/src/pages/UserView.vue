<script setup>
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
// 周期只会执行一次
onMounted(() => {
    console.log("进入了User页面")
})
const route = useRoute()
const name = route.params.name

// 监听路由参数变化，当路由参数变化时，会执行回调函数
watch(() => route.params.name, (newVal, oldVal) => {
    console.log("新参数：", newVal, "旧参数：", oldVal)
})
</script>

<template>
    <div>
        <h1>{{ name }}:用户中心</h1>
        <ul>
            <li><router-link to="/user/baidu">去百度用户</router-link></li>
            <li><router-link to="/user/tobao">去淘宝用户</router-link></li>
            <li><router-link to="/user/jd">去京东用户</router-link></li>
        </ul>
    </div>
</template>
<style scoped></style>