/*
 * @Date: 2021-12-03
 * @Description: babel config
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  env: {
    production: {
      // 打包去除console
      plugins: ["transform-remove-console"],
    },
  },
};
