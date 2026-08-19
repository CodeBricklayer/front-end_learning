<script setup></script>

<template>
 <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/user/baidu">去百度用户</router-link></li>
    <li><router-link to="/list">去列表页</router-link></li>
 </ul>
 <router-view></router-view>
</template>

<style scoped></style>
