// 之前的写法都是通过 script 的 src 属性引入 vue.js 文件
// 但是工作中很多时候并不是那样使用的, 而是通过 Vue 单文件(其实这个方式有自己的问题...)的方式写代码

// 引入 vue 库文件和 App.vue 文件
// 其中 App.vue 是我们自己实现的
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    // 本来 template 要写一段 html 字符串, 然后插入到页面中
    // 现在可以直接以组件的形式写代码
    template: '<fakeApp />',
    // components 是一个对象, 注意对象的 key 就是组件
    // 网上的写法是 key value 组件这三个都叫同一个名字, 让你傻傻分不清楚
    // 所以这里 key 和 value 刻意用不同的名字, 方便区分
    components: {
        fakeApp: App,
    }
})
