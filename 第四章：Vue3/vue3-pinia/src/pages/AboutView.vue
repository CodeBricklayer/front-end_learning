<script setup>
import { useCounterStore} from '@/stores/counter'

// 引入pinia状态
const counter = useCounterStore()
</script>
<template>
    <div>
        <h1>关于</h1>
        <p>
            全局变量：{{ $message }}
        </p>
        <hr>
        <p>
            pinia状态：{{ counter.count }}
        </p>
    </div>
</template>
<style scoped></style>