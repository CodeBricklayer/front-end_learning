<!-- 1.逻辑部分 -->
<script setup>
import Welcom from './components/Welcom.vue'
import TemplateDemo from './components/TemplateDemo.vue'
import RefDemo from './components/RefDemo.vue'
import ReactiveDemo from './components/ReactiveDemo.vue'
import ComputedDemo from './components/ComputedDemo.vue'
import EventDemo from './components/EventDemo.vue'
import IfDemo from './components/IfDemo.vue'
import ForDemo from './components/ForDemo.vue'
import FormDemo from './components/FormDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
</script>

<!-- 2.模板部分 -->
<template>
  <h1>You did it!</h1>
  <Welcom />
  <TemplateDemo />
  <RefDemo />
  <ReactiveDemo />
  <ComputedDemo />
  <EventDemo />
  <IfDemo />
  <ForDemo />
  <FormDemo />
  <WatchDemo />
</template>

<!-- 3.样式部分 -->
<style scoped>
h1 {
  color: red;
}
</style>
