<script setup>
import { ref } from 'vue';


const imageUrl = ref('http://iwenwiki.com:3001/images/banner/1.jpg')
</script>
<template>
  <div>
    <input type="text" v-focus>
    <img v-lazy="imageUrl" alt="">
  </div>
</template>
<style scoped>
</style>