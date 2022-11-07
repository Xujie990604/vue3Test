/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-09-19 21:27:54
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue3Test\src\main.js
 * @Description: 
 */
import { createApp } from 'vue'
// 从 app.vue 组件中导入一个根组件
import App from './App.vue'
import router from './router'


// 将 APP 作为根组件来创建一个 app 应用
// 应用实例并不只限于一个，可以在一个页面中创建多个共存的 Vue 应用，并且每个应用都有自己的配置和全局资源作用域
const app = createApp(App)

// app 应用的根组件内容将会被渲染在 #app 容器中，容器元素自己不会被视为应用的一部分
// ！！！mount() 方法应该始终在整合应用配置和资源注册完成之后调用。
// ！！！它的返回值是根组件实例而非应用实例
app.mount('#app')
