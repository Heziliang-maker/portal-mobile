/*
 * @Date: 2021-12-08
 * @Description: vuex/modules/language
 */

// export const QUERY_LANGUAGE_M = "QUERY_LANGUAGE_M";
export const SELECT_LANGUAGE_M = "SELECT_LANGUAGE_M";
export const SELECT_LANGUAGE_A = "SELECT_LANGUAGE_A";
export const QUERY_LANGUAGE_A = "QUERY_LANGUAGE_A";

import { _translate } from "@/api";
import { Toast } from "vant";
import cookie from "@/utils/cookie";

const state = {
  ccy: "$",
  rate: 1.2,
};

const mutations = {
  [SELECT_LANGUAGE_M](state, payload) {
    const { ccy, rate } = payload;
    state.ccy = ccy;
    state.rate = rate;
  },
};
const actions = {
  // 获取语言和汇率以及货币符号
  async [QUERY_LANGUAGE_A](context, cb) {
    const res = await _translate.queryLocalLanguage();
    console.log("queryLocalLanguage=>", res);
    if (res.status === "success") {
      //根据语言 setCookie => 对插件进行默认设置
      cookie.set("googtrans", "/auto/" + res.result.language);
      //根据货币 汇率 渲染格式化
      cb && typeof cb === "function" && cb(res.result.language);
    }
  },
  async [SELECT_LANGUAGE_A](context, payload) {
    // 防止初始化第一次报错
    if (!payload) return;
    const res = await _translate.queryLanguage(payload.split("/")[2]);
    if (res.status === "success") {
      const { ccySymbol: ccy, rate } = res.result;
      context.commit(SELECT_LANGUAGE_M, { ccy, rate });
    } else {
      Toast(res.errorMsg);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
