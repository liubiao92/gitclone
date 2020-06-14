const path = require('path')
// 官方规定必须使用这个插件
// 这样不仅会对 js 文件使用 module 里面定义的规则, 对 vue 单文件里面的 script 代码也会使用这个规则
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'none',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                // vue-style-loader 相当于 vue 特供的 style-loader, 用来把单文件里面的 css 插入到页面中
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.vue$/,
                // vue-loader 用来解析 vue 单文件
                use: [
                    'vue-loader',
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        // resolve.alias 用来指定引入模块的别名
        // 指定了别名之后,
        // import Vue from vue 相当于
        // import Vue from 'vue/dist/vue.js'
        // 不这么做的话会报错
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
}
