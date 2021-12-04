/*
 * @Date: 2021-12-03
 * @Description: 分析相关
 */

import { baseURL } from "@/config/project";
import request from "@/utils/axios";

export function trackViewBehavior({ type, id, origin, viewTime }) {
  return request({
    url: baseURL.admin + "/analyze/portal/visit/view",
    method: "post",
    data: {
      id: id || null,
      origin: origin || null,
      type: type,
      viewTime: viewTime || null,
    },
  });
}
