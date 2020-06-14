<template>
    <div>
        <menus></menus>
        点击上面的链接
    </div>
</template>

<script>
    import menu from './menu'

    export default {
        // 指定组件的名称, 其实也可以省略
        // 但是指定名称之后可以更加方便调试
        name: 'home',
        components: {
            menus: menu,
        },
    }
</script>