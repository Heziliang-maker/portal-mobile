/*
 * @Date: 2021-12-03
 * @Description: vuex 入口文件
 */

import { createStore } from "vuex";

import getters from "./base/getters";
import state from "./base/state";
import mutations from "./base/mutations";
import actions from "./base/actions";
import modules from "./modules";

export default createStore({
  state,
  getters,
  mutations,
  modules,
  actions,
});
