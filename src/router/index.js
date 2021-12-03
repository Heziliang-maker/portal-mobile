/*
 * @Date: 2021-12-03
 * @Description: router 路由入口文件
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout";

const RouterView = {
  render: (h) => h("router-view"),
};

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "主页",
        path: "/home",
        component: () => import("@/views/home"),
        meta: {
          title: "主页",
        },
      },
      {
        name: "详情",
        path: "/detail",
        component: () => import("@/views/detail"),
        meta: {
          title: "详情",
        },
      },

      // {
      //   name: "更多",
      //   path: "/more",
      //   component: () => import("@/views/more"),
      // },
      // {
      //   name: "隐私政策",
      //   path: "/privacy",
      //   component: () => import("@/views/privacy"),
      // },
      // {
      //   name: "法律条款",
      //   path: "/terms",
      //   component: () => import("@/views/terms"),
      // },
      // {
      //   name: "关于我们",
      //   path: "/about",
      //   component: () => import("@/views/about"),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
