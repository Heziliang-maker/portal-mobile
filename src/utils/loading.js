/*
 * @Date: 2021-12-07
 * @Description:
 */

import store from "@/store";
import { TOGGLE_GLOBAL_LOADING } from "@/store/base/mutations";

export default {
  show() {
    store.commit(TOGGLE_GLOBAL_LOADING, true);
  },
  hide() {
    store.commit(TOGGLE_GLOBAL_LOADING, false);
  },
};
