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
// import "vant/lib/collapse/style";
// import "vant/lib/collapse-item/style";
// import "vant/lib/button/style";
// 实例初始化
const app = createApp(App);

// 批量注册SvgIcon组件
installSvgIcons(app);
// 批量注册vant组件
installVant(app);

app.use(store).use(router).mount("#app");
