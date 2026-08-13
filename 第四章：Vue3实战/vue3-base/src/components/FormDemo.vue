<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const message = ref('')
const info = ref('')

const eventHandle = (e) => {
    username.value = e.target.value
}
</script>
<template>
    <div>
        <form>
            <!-- 传统实现方式 手动绑定表单元素的值到响应式数据上 -->
            <label for="username">用户名：{{ username }}</label>
            <input :value="username" id="username" @input="eventHandle"/>
            <!-- v-model 实现方式：自动绑定表单元素的值到响应式数据上 -->
            <label for="password">密码：{{ password }}</label>
            <input type="password" id="password" v-model="password" />
            <!-- lazy 实现方式：在表单元素失去焦点时才更新响应式数据 -->
             <label for="message">消息：{{ message }}</label>
             <input type="text" id="message" v-model.lazy="message" />
            <!-- trim 实现方式：自动去掉表单元素值的首尾空格 -->
             <label for="info">信息：{{ info }}</label>
             <input type="text" id="info" v-model.trim="info" />
        </form>
    </div>
</template>
<style scoped></style>
