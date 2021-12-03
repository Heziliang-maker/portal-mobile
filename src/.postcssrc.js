/*
 * @Date: 2021-12-03
 * @Description:postcss config
 */
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      exclude: /node_modules/i,
      unitPrecision: 6,
      // selectorBlackList: ['van-']
    },
  },
};
