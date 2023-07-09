// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://api.oioweb.cn',
//         // ws: true,
//         changeOrigin: true
//       },
//     }
//   },
//   transpileDependencies: true,
//   lintOnSave: false,
// });

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true
      },
    }
  }
}
