<script setup>
import { ref } from 'vue'

const books = ref(['西游记', '东游记', '西游前传'])
</script>
<template>
    <div>
        <ul>
            <li v-for="(book, index) in books" :key="index">{{ book }}</li>
             <li v-for="(book, index) of books" :key="index">{{ book }}</li>
        </ul>
    </div>
</template>
<style scoped></style>