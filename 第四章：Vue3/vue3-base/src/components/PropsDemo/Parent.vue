<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const item1 = ref('内容一')
const item2 = ref('内容二')
</script>
<template>
    <div>
        <h3>Parent组件</h3>
        <p>Props是父组件向子组件传递数据的一种方式，通过Props可以将数据从父组件传递到子组件，子组件可以根据Props来渲染内容。</p>
        <p>不能在父组件中引用子组件的Props，只能在子组件中使用。</p>
        <button @click="item1 = '修改后的内容'">修改数据</button>
        <hr>
        <Child :text="item1" />
        <Child :text="item2" />
            </div>
</template>
<style scoped></style>
