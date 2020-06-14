<template>
    <ul>
        <li v-for="(t, i) in todos" v-bind:key="i">
<!--            通过 props 一路把父组件的值传递到子孙组件, 这样子孙组件就可以通过特定的方式更新父组件的数据-->
<!--            vue 的这个组件通信和 react 比较接近-->
            <TodoItem v-bind:todo="t"
                      v-on:onListDelete="propsDelete"
                      v-on:onListUpdate="propsUpdate"
            ></TodoItem>
        </li>
    </ul>
</template>

<script>
    import TodoItem from './TodoItem'

    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            TodoItem,
        },
        methods: {
            propsDelete: function(todoId) {
                this.$emit('onDelete', todoId)
            },
            propsUpdate: function(todo) {
                // 由子组件(TodoItem) 里面调用 this.$emit('onListUpdate') 来触发本组件的 onListUpdate 事件
                // 接着会调用 propsUpdate 方法, 然后在这个方法中触发父组件 todo 的 onUpdate 方法
                // 这样就会调用父组件 todo 的 propsUpdate 方法, 更新相关数据, 然后会自动更新页面
                this.$emit('onUpdate', todo)
            },
        },
    }
</script>

<style scoped>

</style>