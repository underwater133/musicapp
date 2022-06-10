const { defineConfig } = require('@vue/cli-service')

const objExternals = {
  // CDN 的 资源（和vue相关的） 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
  'vue': 'Vue',
  // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
  // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
  // 'element-ui' : 'ELEMENT',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'vant': 'vant'
}
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports = {
  publicPath: './',
  configureWebpack: {
    externals: process.env.VUE_APP_STAGE === 'LOCAL' ? {} : objExternals
  },
}
chainWebpack: config => {
  // 查看打包文件体积大小
  config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
}
