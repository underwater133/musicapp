// const { defineConfig } = require('@vue/cli-service')
// 这里使用的 vue.config.js, webpack.config.js 里面内容大部分相同，只是vue.config.js里面是链式调用的。
const compressionWebpackPlugin = require('compression-webpack-plugin')
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
// module.exports = defineConfig({
//   transpileDependencies: true,
// })
module.exports = {
  publicPath: './',
  configureWebpack: {
    externals: process.env.VUE_APP_STAGE === 'LOCAL' ? {} : objExternals,
    plugins: [new compressionWebpackPlugin({
      filename: '[path][base].gz', //压缩后的文件名
      algorithm: 'gzip', // 压缩格式 有：gzip、brotliCompress,
      test: /\.(js|css)$/,
      threshold: 10240,// 只处理比这个值大的资源，按字节算
      minRatio: 0.8, //只有压缩率比这个值小的文件才会被处理，压缩率=压缩大小/原始大小，如果压缩后和原始文件大小没有太大区别，就不用压缩
      deleteOriginalAssets: false //是否删除原文件，最好不删除，服务器会自动优先返回同名的.gzip资源，如果找不到还可以拿原始文件
    })],
  },
}
chainWebpack: config => {
  // 查看打包文件体积大小
  config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
}
