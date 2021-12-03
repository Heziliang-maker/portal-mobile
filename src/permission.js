/*
 * @Date: 2021-12-03
 * @Description:
 */

// =>引入路由
import router from "@/router";
// =>引入store
import store from "@/store";
// =>引入mutaions
import { TOGGLE_FOOTER_VISIBILITY } from "./store/base/mutations";
// =>引入获取页面标题函数
import { getPageTitle } from "@/utils/tools";

router.beforeEach((to, from, ) => {
  // set page title
  document.title = getPageTitle(to.meta.title);
  // hidden footer
  store.commit(TOGGLE_FOOTER_VISIBILITY, false);
  // next((vm) => {
  //   console.log("=>", "nextTick");
  //   vm.$nextTick(() => {
  //     store.commit(TOGGLE_FOOTER_VISIBILITY, true);
  //   });
  // });
});

router.afterEach(() => {});
