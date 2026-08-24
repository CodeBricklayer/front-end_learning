<script setup></script>

<template>
  <h3>
    Vue项目
  </h3>
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/about">关于</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<style scoped></style>
