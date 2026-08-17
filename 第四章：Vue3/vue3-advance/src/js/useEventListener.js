import { onMounted, onUnmounted } from 'vue'

// 通用事件监听组合式函数：在组件挂载时绑定，卸载时自动解绑
export function useEventListener(target, event, callback, options) {
    onMounted(() => target.addEventListener(event, callback, options))
    onUnmounted(() => target.removeEventListener(event, callback, options))
}
