<template>
    <div>
        <menus></menus>
        <h3>TODO</h3>
<!--        组件上不仅可以使用 v-on:click 这样的事件, 还可以用自定义事件, 比如这里的 onDelete 和 onUpdate-->
<!--        当触发 onDelete 事件的时候, 会调用 propsDelete 方法-->
        <TodoList v-bind:todos="todos"
                  v-on:onDelete="propsDelete"
                  v-on:onUpdate="propsUpdate"
        ></TodoList>
        <TodoCounter v-bind:todos="todos"></TodoCounter>
        <form>
            <label for="new-todo">
                输入事项
            </label>
            <input id="new-todo" v-model="text">
            <button @click="actionAdd">
                添加第 {{ todoLength() }} 个 todo
            </button>
        </form>
    </div>
</template>

<script>
    import menu from './menu'
    import TodoApi from '../api/todo'
    import TodoList from './TodoList'
    import TodoCounter from './TodoCounter'

    export default {
        name: "todo",
        components: {
            menus: menu,
            TodoList: TodoList,
            TodoCounter: TodoCounter,
        },
        data: function() {
            return {
                text: '',
                todos: [],
                api: new TodoApi(),
            }
        },
        methods: {
            todoLength: function() {
                return this.todos.length + 1
            },
            actionAdd: function(e) {
                e.preventDefault()
                if (this.text.length === 0) {
                    return
                }
                let task = this.text
                let data = {
                    task,
                }
                this.api.add(data).then(r => {
                    this.text = ''
                    this.todos.push(r)
                })
            },
            propsDelete: function(todoId) {
                let index = this.todos.findIndex(e => {e.id === todoId})
                this.todos.splice(index, 1)
            },
            propsUpdate: function(todo) {
                let t = this.todos.find(e => e.id === todo.id)
                t.task = todo.task
                t.done = todo.done
            },
        },
        // 一般来说在 created 方法里面获取数据, 并且更新 data 里面的值
        created: function() {
            this.api.all().then(r => this.todos = r)
        },
    }
</script>

<!--scoped 属性指定这一个 style 只能在当前组件生效-->
<!--如果不指定的话就是整个应用内生效-->
<style scoped>
    ul,
    li {
        list-style: none;
    }
</style>