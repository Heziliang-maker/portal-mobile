/*
 * @Date: 2021-12-03
 * @Description: vuex/mutations
 */
export const TOGGLE_FOOTER_VISIBILITY = "TOGGLE_FOOTER_VISIBILITY";
export const TOGGLE_MENU_VISIBILITY = "TOGGLE_MENU_VISIBILITY";

export default {
  [TOGGLE_FOOTER_VISIBILITY](state, payload) {
    console.log("=>", "TOGGLE_FOOTER_VISIBILITY", payload);
    state.isFooterVisible = payload;
  },
  [TOGGLE_MENU_VISIBILITY](state, payload) {
    console.log("=>", "TOGGLE_MENU_VISIBILITY", payload);
    state.isMenuShow = payload;
  },
};
