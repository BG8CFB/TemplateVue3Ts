// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
const devHost = process.env.VUE_APP_HOST;
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('baseConfig'))
      .set('public', resolve('public'));
  },
  devServer: {
    open: true, // 是否开启浏览器
    host: '', // 主机IP
    port: 9000, // 端口号
    // proxy: {
    //   '/api': {
    //     target: devHost,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  },
};
