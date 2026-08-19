<script setup></script>

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
    <li><router-link :to="{name:'userView',params:{name:'baidu'}}">去百度用户新</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<style scoped></style>
