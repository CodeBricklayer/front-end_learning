<!-- 1.逻辑部分 -->
<script setup>
import { defineAsyncComponent } from 'vue'
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
import DomDemo from './components/DomDemo.vue'
import ComponentsDemo from './components/ComponentsDemo.vue'
import ComponentsLifeDemo from './components/ComponentsLifeDemo.vue'
import PropsDemo from './components/PropsDemo/Parent.vue'
import CustomEventDemo from './components/CustomEventDemo/Parent.vue'
import ComponentsParentDemo from './components/ComponentsDemo/Parent.vue'
import SlotDemo from './components/SlotDemo.vue'
import Loading from './components/Loading.vue'
import Error from './components/Error.vue'
import Timeout from './components/Timeout.vue'
import Default from './components/Default.vue'
// import AsyncComponentDemo from './components/AsyncComponentDemo.vue'
const AsyncComponent = defineAsyncComponent(() => import('./components/AsyncComponentDemo.vue'))
// const AsyncComponent = defineAsyncComponent({
//   // 异步组件的加载函数
//   loader: () => import('./components/AsyncComponentDemo.vue'),
//   // 异步组件的加载状态
//   loading: Loading,
//   // 异步组件的加载延迟时间
//   delay: 2000,
//   // 异步组件的错误状态
//   error: Error,
//   // 异步组件的超时状态
//   timeout: Timeout,
//   // 异步组件的超时时间
//   timeout: 2000,
//   // 异步组件的默认状态
//   default: Default,
//   })
</script>

<!-- 2.模板部分 -->
<template>
  <!-- <h1>You did it!</h1>
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
  <DomDemo />
  <ComponentsDemo />
  <ComponentsLifeDemo />
  <PropsDemo />
  <CustomEventDemo /> -->
  <!-- <ComponentsParentDemo /> -->
  <!-- <SlotDemo>
    <span>点击click me!</span>
    <template #main>
        <p>这是main槽位的内容</p>
    </template>
    <template #footer>
        <p>这是footer槽位的内容</p>
    </template>
  </SlotDemo> -->

  <!-- <AsyncComponent /> -->
</template>

<!-- 3.样式部分 -->
<style scoped>
h1 {
  color: red;
}
</style>
