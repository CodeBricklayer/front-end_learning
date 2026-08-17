<script setup>
</script>
<template>
    <div class="box">
        <slot>默认内容</slot>
    </div>
    <div class="main">
        <slot name="main">默认内容</slot>
    </div>
    <div class="footer">
        <slot name="footer">默认内容</slot>
    </div>
</template>
<style scoped>
.box {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
</style>
