/*
 * @Date: 2021-12-03
 * @Description: vuex/mutations
 */
export const TOGGLE_FOOTER_VISIBILITY = "TOGGLE_FOOTER_VISIBILITY";

export default {
  [TOGGLE_FOOTER_VISIBILITY](state, payload) {
    console.log("=>", "TOGGLE_FOOTER_VISIBILITY", payload);
    state.isFooterVisible = payload;
  },
};
