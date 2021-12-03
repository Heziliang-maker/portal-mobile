/*
 * @Date: 2021-12-03
 * @Description: 产品相关
 */
import request from "@/utils/axios";
import { baseURL } from "@/config/project";

// 查询产品列表
export function queryPortalProducts(sort = null) {
  return request({
    url: baseURL.admin + "/portal/query_portals",
    method: "post",
    data: {
      sort,
    },
  });
}

// 查询某个产品的详情
export function queryProductsDetail({ productId, shopId }) {
  return request({
    url: baseURL.shop + "/products/query/details",
    method: "post",
    headers: {
      shopid: shopId,
      "user-key": "3c406742-e6d2-4d76-abe0-5e43b499f7f9",
    },
    data: {
      query: {
        productId,
      },
    },
  });
}
