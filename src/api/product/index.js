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
// 查询产品系列
export function queryPortalSeries() {
  return request({
    url: baseURL.admin + "/portal/add_portals_classify_name",
    method: "post",
  });
}

// 查询系列商品(搜索)
export function querySeriesProducts({ asc, filter }) {
  return request({
    url: baseURL.admin + "/portal/query/release/product/detail/page",
    method: "post",
    data: {
      query: {
        filter: {
          isOnMarket: true,
          maxPrice: filter.max,
          minPrice: filter.min,
          productName: filter.productName,
          classifyId: filter.classifyId,
        },
        order: true,
        orderBy: {
          amt: true,
        },
        asc: asc,
        pages: {
          pageNum: 1,
          pageSize: 999,
        },
      },
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
// 查询某个产品的详情
export function queryProductsShop({ shopId }) {
  return request({
    url: baseURL.shop + "/shops/query/info",
    method: "post",
    headers: {
      shopid: shopId,
      "user-key": "3c406742-e6d2-4d76-abe0-5e43b499f7f9",
    },
  });
}
