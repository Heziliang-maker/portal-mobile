/*
 * @Date: 2021-12-03
 * @Description: 翻译相关
 */
import request from "@/utils/axios";
import { baseURL } from "@/config/project";

// 语言汇率转换
export function queryLanguage(data) {
  return request({
    url: baseURL.admin + "/portal/change_rate",
    method: "post",
    data: {
      language: data,
    },
  });
}

// 地区查询语言汇率
export function queryLocalLanguage() {
  return request({
    url: baseURL.admin + "/portal/query_test",
    method: "get",
  });
}
