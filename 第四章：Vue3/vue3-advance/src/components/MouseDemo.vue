<script setup>
import { useMouse } from '../js/useMouse.js'
const { x, y } = useMouse()
</script>
<template>
    <div>
        鼠标跟随获取X轴坐标：{{ x }}
        鼠标跟随获取Y轴坐标：{{ y }}
    </div>
</template>