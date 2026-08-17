// 自定义指令：图片懒加载
// 通过 IntersectionObserver 监听元素是否进入视口
// 进入视口时才将 binding.value（真实图片地址）赋值给 el.src，实现按需加载
export default {
    // mounted 钩子：指令绑定到元素后执行
    mounted(el, binding, vnode) {
        // 创建 IntersectionObserver 实例，监听元素与视口的交叉状态
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
            // 判断元素是否进入视口
            if (isIntersecting) {
                // 将指令传入的真实图片地址赋值给 img 元素的 src 属性，触发图片加载
                el.src = binding.value
                // 图片开始加载后，取消对该元素的观察，避免重复触发
                observer.unobserve(el)
            }
        })
        // 调用 observer.observe 方法开始观察目标元素
        // 注意：observe 是 IntersectionObserver 实例的方法，不是 el 的方法
        observer.observe(el)
    }
}
