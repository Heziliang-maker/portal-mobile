/*
 * @Date: 2021-12-03
 * @Description: directives/jumpTo
 */

import router from "@/router";
import { _analysis } from "@/api";

// 谷歌数据采集方法
function decorateUrl(urlString) {
  var ga = window[window["GoogleAnalyticsObject"]];
  var tracker;
  if (ga && typeof ga.getAll === "function") {
    tracker = ga.getAll()[0]; // Uses the first tracker created on the page
    urlString = new window.gaplugins.Linker(tracker).decorate(urlString);
  }
  return urlString;
}
function cb({ url, type, id, detailQuery }) {
  //渠道
  _analysis.trackViewBehavior({
    type,
    id,
    origin: window.getAttribute("origin"),
  });

  let openUrl = "";
  if (url) {
    if (url.indexOf("?") != -1) {
      openUrl = url + (window.analysis() ? "&" + window.analysis() : "");
    } else {
      openUrl = url + (window.analysis() ? "?" + window.analysis() : "");
    }
    openUrl = decorateUrl(openUrl);

    if (detailQuery) {
      router.push({
        path: "/detail",
        query: { requestQuery: JSON.stringify(detailQuery), url: openUrl },
      });
      return;
    }
    window.open(openUrl, "_blank");
  }
}

export default function (el, binding) {
  el.onclick = function () {
    cb(binding.value);
  };
}
