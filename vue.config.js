
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/css/variables.scss";
          @import "~@/assets/css/common.scss";
          `
      }
    }
  },

  publicPath: process.env.PUBLIC_PATH,

  // devServer: {
  //   open: true,
  //   port: 8088,
  //   host: getIp() || '127.0.0.1',
  //   proxy: {
  //     "/cos/*": {
  //       target: process.env.VUE_APP_API_ROOT,
  //     }
  //   }
  // },

  outputDir: process.env.OUTPUT_DIR,
  chainWebpack:config =>{
    //添加别名
    config.resolve.alias
      .set("@",resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
  }
}