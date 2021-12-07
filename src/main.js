/*
 * @Date: 2021-12-03
 * @Description: 项目 入口文件
 */
// =>引入一些库
import { createApp } from "vue";
// =>引入根组件
import App from "./App.vue";
// =>引入路由
import router from "./router";
// =>引入vuex
import store from "./store";
// =>引入permissionjs
import "./permission";
// =>引入重置样式
import "normalize.css";
// =>引入rem flexible
// rem插件
import "amfe-flexible";
// =>引入 icon/*.svg 注册函数
import installSvgIcons from "./icons";
// =>引入 vant 注册函数
import installVant from "./config/vant";
// =>引入 自定义指令 注册函数
import installDirectives from "./directives";
// =>引入 过滤器
import filters from "./filters";
// =>引入 loading
import loading from "@/utils/loading";
// =>引入 全局组件 注册函数
import installGlobalComponents from "./components/global";
// =>引入window函数
import "@/utils/window-func";

// 实例初始化
const app = createApp(App);

// 批量注册SvgIcon组件
installSvgIcons(app);
// 批量注册vant组件
installVant(app);
// 批量注册自定义指令
installDirectives(app);
// 批量注册全局组件
installGlobalComponents(app);

// 注册全局属性
// 1.挂载过滤器
app.config.globalProperties.$filter = filters;
app.config.globalProperties.$loading = loading;

app.use(store).use(router).mount("#app");
