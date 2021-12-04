/*
 * @Date: 2021-12-03
 * @Description: 自定义指令
 */

export default function (instance) {
  // require.context("./", false, /\.vue$/)
  const modulesFiles = require.context("./", true, /^\.\/(\w*\/)+index\.js$/);

  // console.log("modulesFiles=>", modulesFiles, modulesFiles.keys());

  modulesFiles.keys().forEach((modulePath) => {
    const name = modulePath.match(/(?<=\.\/).*?(?=\/index\.js)/)[0];
    const value = modulesFiles(modulePath).default;
    console.log("自定义指令 注册了=>", name);
    instance.directive(name, value);
  });
}
