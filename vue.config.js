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
    public: "192.168.5.167:9527",
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
  css: {
    // 依赖postcss-pxtorem 和 flexible 解决移动端自适应问题
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ["last 15 versions"],
          }),
          require("postcss-pxtorem")({
            rootValue: 37.5, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            propList: ["*"],
            exclude: /node_modules/i,
          }),
        ],
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
