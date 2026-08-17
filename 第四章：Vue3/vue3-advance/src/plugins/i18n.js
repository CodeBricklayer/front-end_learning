export default {
    install: (app, options) => {
        // 全局注册 $t 方法，用于在模板中调用 i18n 实例的 t 方法
        app.config.globalProperties.$t = (key) => {
            // 递归查找 key 中的每个属性，返回最终的值
            // 如果 key 中的属性不存在，返回 key 本身
            // 例如：'hello.world' 会返回 'hello.world'
            return key.split('.').reduce((o, i) => {
                if (o) {
                    return o[i]
                }
            }, options)
        }
    }
}