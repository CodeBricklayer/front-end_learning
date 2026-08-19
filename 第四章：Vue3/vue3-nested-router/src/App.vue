<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage1 = () => {
  // router.push('/list')
  router.push({
    path: '/list'
  })
}

const goToPage2 = () => {

  router.push({
    name: 'userView',
    params: {
      name: 'baidu'
    }
  })
}

const goBack = () => {
  // 后退
  router.go(-1)
}

const goForward = () => {
  // 前进
  router.go(1)
}

const goReplace = () => {
  // 替换
  router.replace('/list')
}
</script>

<template>
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <!-- 静态路由参数 -->
    <li><router-link to="/user/baidu">去百度用户</router-link></li>
    <li><router-link to="/list">去列表页</router-link></li>
  </ul>

  <ul>
    <li><router-link to="/">首页</router-link></li>
    <!-- 动态路由参数 -->
    <li><router-link :to="{ name: 'userView', params: { name: 'baidu' } }">去百度用户新</router-link></li>
  </ul>

  <div>
    <h3>这是编程式导航</h3>
    <button @click="goToPage1">按钮1</button>
    <button @click="goToPage2">按钮2</button>
    <button @click="goBack">后退</button>
    <button @click="goForward">前进</button>
    <button @click="goReplace">替换</button>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
