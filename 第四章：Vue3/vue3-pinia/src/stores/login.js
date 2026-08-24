import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
    // 登录状态
    const isLogin = ref(false)

    const login = () => {
        isLogin.value = true
    }

    const logout = () => {
        isLogin.value = false
    }
    
    return {
        isLogin,
        login,
        logout
    }
})