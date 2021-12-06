<!--
 * @Date: 2021-12-03
 * @Description: layout/nav 导航
-->

<!--
 * @Date: 2021-12-02
 * @Description: Nav组件
-->
<template>
  <div
    class="nav"
    :class="{'show':isBackShow}"
  >
    <div
      class="back"
      v-if="isBackShow"
    >
      <svg-icon
        class="svgicon"
        icon-class="layout-nav-back"
        @click="handleClickBackIcon"
      ></svg-icon>
    </div>
    <div class="menu">
      <svg-icon
        class="svgicon"
        icon-class="layout-nav-menu"
        @click="handleClickMenuIcon"
      ></svg-icon>
    </div>
    <div class="search">
      <svg-icon
        class="svgicon"
        icon-class="layout-nav-search"
        @click="handleClickSearchIcon"
      ></svg-icon>
    </div>
    <div class="logo">
      <img
        @click="handleClickLogoIcon"
        src="@/assets/images/layout-nav/header-logo.webp"
        alt="buykop-logo"
      >
    </div>
    <div class="collection">
      <svg-icon
        class="svgicon"
        icon-class="layout-nav-collection"
        @click="handleClickColIcon"
      ></svg-icon>
    </div>
    <div class="user">
      <svg-icon
        class="svgicon"
        icon-class="layout-nav-user"
        @click="handleClickUserIcon"
      ></svg-icon>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { TOGGLE_MENU_VISIBILITY_M } from "@/store/base/mutations";
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();

        const store = useStore();

        const handleClickMenuIcon = () => {
            store.commit(TOGGLE_MENU_VISIBILITY_M, true);
        };
        const handleClickLogoIcon = () => {
            router.push("/home");
        };
        const handleClickSearchIcon = () => {};
        // 返回
        const handleClickBackIcon = () => router.back();
        const handleClickColIcon = () => {};
        const handleClickUserIcon = () => {};
        return {
            isBackShow: computed(() => {
                const whiteList = ["/detail"];
                const path = route.path;
                console.log("route changed=>", route);
                return whiteList.includes(path);
            }),
            handleClickMenuIcon,
            handleClickLogoIcon,
            handleClickSearchIcon,
            handleClickBackIcon,
            handleClickColIcon,
            handleClickUserIcon
        };
    }
};
</script>




<style lang="scss" scoped>
.nav {
    display: grid;
    grid-template-columns: 24px 24px auto 24px 24px [user];
    grid-template-rows: 1fr;
    gap: 0px 16px;
    grid-auto-flow: row;
    justify-items: center;
    align-items: center;
    grid-template-areas: "menu search logo col user";
    width: 375px;
    padding: 8px 16px;
    box-sizing: border-box;
    background-color: #fff;

    .svgicon {
        width: 24px;
        height: 24px;
    }

    > div {
        font-size: 0;
    }
}
.nav.show {
    grid-template-columns: 24px 24px 24px auto 24px 24px [user];
    grid-template-areas: "back menu search logo col user";
}

.menu {
    grid-area: menu;
}

.user {
    grid-area: user;
}
.back {
    grid-area: back;
}

.search {
    grid-area: search;
}

.collection {
    grid-area: col;
}

.logo {
    grid-area: logo;

    img {
        height: 26px;
    }
}
.box {
    line-height: 24px;
}
</style>

