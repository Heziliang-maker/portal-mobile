/*
 * @Date: 2021-12-03
 * @Description: 自动注册全局组件;compoments/*.vue 全局注册组件
 */

export default function (instance) {
  function registerAllComponents(requireContext) {
    return requireContext.keys().forEach((comp) => {
      const vueComp = requireContext(comp);
      const compName = vueComp.name
        ? vueComp.name.toLowerCase()
        : /\/([\w-]+)\.vue$/.exec(comp)[1];
      instance.component(compName, vueComp.default);
      console.log("=>", compName);
    });
  }

  registerAllComponents(require.context("./", false, /\.vue$/));
}
