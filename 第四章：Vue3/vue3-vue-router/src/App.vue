<script setup>
</script>

<template>
  <div>hello world</div>
  <!-- 路由出口：根据当前路由路径渲染对应的组件 -->
  <router-view />
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/about">关于</router-link></li>
  </ul>
</template>

<style scoped>
</style>
