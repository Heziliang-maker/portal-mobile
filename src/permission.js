/*
 * @Date: 2021-12-03
 * @Description:
 */

// =>引入路由
import router from "@/router";
// =>引入store
import store from "@/store";
// =>引入mutaions
import { TOGGLE_FOOTER_VISIBILITY_M } from "./store/base/mutations";
import { QUERY_PORTAL_A } from "./store/base/actions";
// =>引入获取页面标题函数
import { getPageTitle } from "@/utils/tools";

router.beforeEach(async (to, from) => {
  // set page title
  document.title = getPageTitle(to.meta.title);
  // hidden footer
  store.commit(TOGGLE_FOOTER_VISIBILITY_M, false);

  const refreshed =
    store.state.bannerList.length === 0 || store.state.seriesList.length === 0;

  if (refreshed) {
    console.log("=>", "refreshed");
    // refresh
    await store.dispatch(QUERY_PORTAL_A);
  }

  // next((vm) => {
  //   console.log("=>", "nextTick");
  //   vm.$nextTick(() => {
  //     store.commit(TOGGLE_FOOTER_VISIBILITY_M, true);
  //   });
  // });
});

router.afterEach(() => {});
