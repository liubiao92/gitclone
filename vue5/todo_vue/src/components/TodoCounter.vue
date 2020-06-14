<template>
    <div class="todo-counter">
        <p>统计</p>
        <div class="todo-table">
            <div class="todo-row">
                <span class="cell">总计</span>
                <span class="cell">完成</span>
                <span class="cell">未完成</span>
            </div>
            <div class="todo-row">
<!--                total 并不是从 data 或者 props 中获取, 而是从 computed 中获取-->
<!--                而完成数量和未完成数据都是直接通过 props 中获取的 todos 进行计算的, 这两种方案都可以-->
                <span class="cell">{{ total }}</span>
                <span class="cell">{{ todos.filter(e => e.done).length }}</span>
                <span class="cell">{{ this.todos.filter(e => !e.done).length }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoCounter",
        props: ['todos'],
        // 可计算属性, 在这个对象里面定义的 key 可以直接在 template 中使用
        // 官方本来的想法是有一些负责的逻辑可以在这里面计算, 但其实无所谓, 完全可以直接使用 methods 方法来替代的
        // 至于说缓存, 自己实现也很容易, 不过很多人喜欢用, 那就加上好了
        computed: {
            total: function() {
                return this.todos.length
            }
        }
    }
</script>

<style scoped>

    .todo-table {
        display: table;
        margin: 10px 0 30px;
    }

    .todo-row {
        display: table-row;
    }

    .todo-row:not(:first-child) {
        margin-top: -1px;
    }

    .cell {
        display: table-cell;
        width: 100px;
        text-align: center;
        border: 1px solid #eee;
    }
</style>