/*
 * @Date: 2021-12-03
 * @Description: vuex/mutations
 */
export const TOGGLE_FOOTER_VISIBILITY_M = "TOGGLE_FOOTER_VISIBILITY_M";
export const TOGGLE_FILTER_VISIBILITY_M = "TOGGLE_FILTER_VISIBILITY_M";
export const QUERY_PORTAL_M = "QUERY_PORTAL_M";

export const TOGGLE_MENU_VISIBILITY_M = "TOGGLE_MENU_VISIBILITY_M";
export const UPDATE_LIST_ISVIEW_M = "UPDATE_LIST_ISVIEW_M";

export default {
  [TOGGLE_FOOTER_VISIBILITY_M](state, payload) {
    // console.log("=>", "TOGGLE_FOOTER_VISIBILITY", payload);
    state.isFooterVisible = payload;
  },
  [TOGGLE_FILTER_VISIBILITY_M](state, payload) {
    // console.log("=>", "TOGGLE_FOOTER_VISIBILITY", payload);
    state.isFilterShow = payload;
  },

  [TOGGLE_MENU_VISIBILITY_M](state, payload) {
    // console.log("=>", "TOGGLE_MENU_VISIBILITY", payload);
    state.isMenuShow = payload;
  },

  [UPDATE_LIST_ISVIEW_M](state, { seriesId, productUrl }) {
    const series = state.seriesList.find(
      (series) => series.classifyId === seriesId
    );

    const target = series.productList.find(
      (product) => product.productUrl === productUrl
    );

    target.isView = !target.isView;
  },
  [QUERY_PORTAL_M](state, payload) {
    console.log("payload=>", payload);
    const [bannerList, seriesList] = payload;
    state.bannerList = bannerList;
    state.seriesList = seriesList;
  },
};
