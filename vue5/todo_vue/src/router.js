import Vue from 'vue'
// 引入 vue router 这个插件
import VueRouter from 'vue-router'

// Vue.use 是在 vue 里面使用插件的方法
// 这样就可以使用 vue-router 的功能了
Vue.use(VueRouter)

import home from './components/home'
import todo from './components/todo'
import TodoDetail from './components/TodoDetail'

// 定义好路由和组件的映射关系
// 比如说访问 /home 路由的时候, 会跳转到 home 这个组件
const routes = [
    {
        path: '/',
        // redirect 用来做重定向, 也就是访问 / 的时候会重定向到 /home
        // 并且访问 /home 会跳转到 home 组件
        // 所以现在访问根路由 / 就会跳转到 home 组件
        redirect: '/home',
    },
    {
        path: '/home',
        component: home,
    },
    {
        path: '/todo',
        component: todo,
    },
    {
        path: '/todo/:id',
        component: TodoDetail,
    },
]

// 创建 router 实例, 并且把上面的映射关系作为参数传进去
// 同时 mode: history 指定了路由的形式
const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

// 导出路由实例
export default router