<script setup>
import { useLoginStore } from '@/stores/login'

// 引入pinia状态
const login = useLoginStore()
</script>
<template>
    <div>
        <h1>用户中心</h1>
        <p v-if="login.isLogin">
            用户已登录
        </p>
        <p v-else>
            用户未登录
        </p>
    </div>
</template>
<style scoped></style>