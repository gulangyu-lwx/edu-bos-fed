const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 5000, // 设置端口号
    host: 'localhost', // 设置主机名
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
