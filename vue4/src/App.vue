<!--所谓的 vue 单文件就是把 html css js 这三个东西写在一个文件-->
<!--官方宣称的好处如下 https://cn.vuejs.org/v2/guide/single-file-components.html-->
<!--实际上本身代码垃圾的话, 强行混合只能让这个变成垃圾堆...-->
<!--另外因为这个东西是三个混合的, 所以很轻松就能写出几千行甚至上万行的代码-->


<!--简单来说, template 里面写 html 代码, script 里面写 js 代码, 而 style 里面写 css 代码-->
<template>
    <div>
<!--        不仅可以用 class, 还可以用 v-bind 的方式动态指定 class-->
<!--        另外这种用法类似 classnames 这个库-->
<!--        渲染的时候只在 i 和 current 相等的那一个元素上添加 active class-->
<!--        绑定事件的时候还可以直接传递参数, 尽管这里加上了小括号 (), 但是并没有调用 actionClick 这个函数, 还是要等到点击的时候才会调用 -->
        <span v-for="(m, i) in menus" @click="actionClick(i)" class="radio-button"
              v-bind:class="{ active: i === current}">
            {{ m }}
        </span>
        <p>点击上面的菜单</p>
    </div>
</template>

<script>
    export default {
        // 因为这是个组件, 所以 data 只能是函数, 而不是对象
        data: function() {
            return {
                menus: [
                    'html',
                    'js',
                    'css',
                ],
                current: 0,
            }
        },
        methods: {
            // 点击的时候调用 actionClick 函数, 并且把元素对应的 i 作为参数传递过来
            actionClick: function(index) {
                // 把 current 换成传递过来的参数, 这样就可以做到点击哪个元素, 就哪个元素有 active 这个 class
                console.log('index', index)
                this.current = index
            }
        }
    }
</script>

<style>
    .radio-button {
        display: inline-block;
        padding: 10px;
        margin: 0 2px;
        cursor: pointer;
        background: lightcyan;
    }

    .active {
        background: lightyellow;
    }
</style>
