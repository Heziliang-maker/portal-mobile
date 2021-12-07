/*
 * @Date: 2021-12-03
 * @Description: vuex/mutations
 */
export const TOGGLE_FOOTER_VISIBILITY_M = "TOGGLE_FOOTER_VISIBILITY_M";
export const TOGGLE_FILTER_VISIBILITY_M = "TOGGLE_FILTER_VISIBILITY_M";
export const QUERY_PORTAL_M = "QUERY_PORTAL_M";
export const QUERY_PORTAL_SERIES_M = "QUERY_PORTAL_SERIES_M";

export const TOGGLE_MENU_VISIBILITY_M = "TOGGLE_MENU_VISIBILITY_M";
export const UPDATE_LIST_ISVIEW_M = "UPDATE_LIST_ISVIEW_M";
export const TOGGLE_GLOBAL_LOADING = "TOGGLE_GLOBAL_LOADING";
export const SET_SEARCHVALUE = "SET_SEARCHVALUE";

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
    state.categoriesList = seriesList.reduce((pre, cur, index) => {
      // 封装数组
      const lastIndex = seriesList.length - 1 - index;

      return index > lastIndex ? pre : [...pre, [cur, seriesList[lastIndex]]];
    }, []);
  },
  [QUERY_PORTAL_SERIES_M](state, payload) {
    state.seriesIndexList = payload;
  },
  [TOGGLE_GLOBAL_LOADING](state, payload) {
    state.isGlobalLoading = payload;
  },
  [SET_SEARCHVALUE](state, payload) {
    state.searchValue = payload;
  },
};
