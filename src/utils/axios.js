/*
 * @Date: 2021-12-03
 * @Description: axios 配置
 */

import axios from "axios";
import { Notify } from "vant";

const service = axios.create({
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.errorCode === 200000) {
      //正常响应====>
      return res;
    } else {
      // Notify({
      //   type: "danger",
      //   message: res.errorMsg || "Error",
      //   duration: 2000,
      // });
      //返回错误类型
      // return Promise.reject(new Error(res.errorMsg || "Error"));
      return res;
    }
  },
  (error) => {
    Notify({ type: "danger", message: error.message, duration: 2000 });
    return Promise.reject(error);
  }
);

export default service;
