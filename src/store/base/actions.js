/*
 * @Date: 2021-12-06
 * @Description: vuex/actions
 */

export const QUERY_PORTAL_A = "QUERY_PORTAL_A";

import { QUERY_PORTAL_M } from "./mutations";
import { _product } from "@/api";

export default {
  async [QUERY_PORTAL_A](context) {
    const { result } = await _product.queryPortalProducts();
    const { advDTOS: bannerList, seriesDTOS: seriesList } = result;

    const payload = [bannerList, seriesList];
    console.log("payload=>", payload);

    context.commit(QUERY_PORTAL_M, payload);
  },
};
