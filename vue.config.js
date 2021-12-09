const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('public', resolve('public'));
  },
  devServer: {
    open: true, // 是否开启浏览器
    host: '', // 主机IP
    port: 9000, // 端口号
    // // 代理配置
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  },
});
