/*
 * @Date: 2021-12-03
 * @Description: 过滤器
 */

export default {
  //差价求和
  countFix: (val1, val2) => {
    return val1 ? "$" + val1.toFixed(2) : "";
  },

  //价格整数与小数分割
  priceGroup: (val) => {
    return `$${val.toString().split(".")[0] - 0}</span><a>${
      val.toString().split(".").length > 1 ? val.toString().split(".")[1] : ""
    }</a>`;
  },
};
