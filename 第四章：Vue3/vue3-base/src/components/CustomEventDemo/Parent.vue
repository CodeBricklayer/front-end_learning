<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const item1 = ref('内容一')

function handleSomeEvent(data) {
    item1.value = item1.value + data
}
</script>
<template>
        <div>
            <h3>Parent组件</h3>
            <p>自定义事件是一种父组件向子组件传递数据的一种方式，通过自定义事件可以将数据从子组件传递到父组件。</p>
            <p>自定义事件的使用方法如下：</p>
            <ol>
                <li>在子组件中定义defineEmits函数，用于定义自定义事件。</li>
                <li>在子组件中使用emit函数，用于触发自定义事件。</li>
                <li>在父组件中监听自定义事件，用于接收子组件传递的数据。</li>
            </ol>
        </div>
        <hr>
        <p>当前内容一：{{ item1 }}</p>
        <Child @someEvent.once="handleSomeEvent" />
</template>
<style scoped></style>