/*
 * @Date: 2021-12-03
 * @Description: 推广相关
 */
import request from "@/utils/axios";
import { baseURL } from "@/config/project";

// 查询折扣
export function queryDiscount() {
  return request({
    url: baseURL.admin + "/portal/query_discount",
    method: "post",
  });
}

//用户订阅
export function userSubscribe(emailAddress) {
  return request({
    url: baseURL.admin + "/portal/subscription",
    method: "post",
    data: {
      emailAddress,
    },
  });
}
