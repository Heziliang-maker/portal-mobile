/*
 * @Date: 2021-12-03
 * @Description: 项目 配置文件
 */

// 时间戳
const timestamp = new Date().getTime();
// path模块
const path = require("path");
// 是否为生产环境
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
// 路径包装函数
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 打包分析模块
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      "^/shop-admin/v1": {
        target: "http://106.15.62.70:17804/",
        changeOrigin: true,
      },
      "^/shop/v1": {
        target: "http://106.15.62.70:17804/",
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    // 如果是生产环境：
    if (IS_PROD) {
      // 打包分析
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static",
        },
      ]);
      config.output.filename("js/[name]." + timestamp + ".js").end();
      config.output.chunkFilename("js/[name]." + timestamp + ".js").end();
      config.plugin("extract-css").tap((args) => [
        {
          filename: `css/[name].${timestamp}.css`,
          chunkFilename: `css/[name].${timestamp}.css`,
        },
      ]);
    }
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    config.module.rule("scss").oneOfs.store.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            // 公用全局变量
            resolve("src/styles/variables.scss"),
            // 公用全局样式
            resolve("src/styles/global.scss"),
            // 公用全局函数
            resolve("src/styles/mixins.scss"),
          ],
        })
        .end();
    });
  },
};
