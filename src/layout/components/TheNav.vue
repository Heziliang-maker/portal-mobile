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
        :icon-class="searchIconClass"
        @click="handleClickSearchIcon"
      ></svg-icon>
    </div>
    <div class="logo">
      <img
        @click="handleClickLogoIcon"
        src="@/assets/images/layout-nav/layout-nav-logo.webp"
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
    <!-- 下滑进入 -->
    <transition name="van-fade">
      <div
        v-show="isSearchActive"
        class="searchbox"
      >
        <van-search
          ref="searchInputRef"
          v-model="searchValue"
          placeholder="Search"
          @search="onSearch"
          @blur="onBlur"
        />
      </div>
    </transition>

  </div>

</template>


<script>
import { computed, reactive, toRefs, ref, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { TOGGLE_MENU_VISIBILITY_M, SET_SEARCHVALUE } from "@/store/base/mutations";

export default {
    setup() {
        const route = useRoute();

        const router = useRouter();

        const store = useStore();

        const state = reactive({
            searchValue: "",
            isSearchActive: false
        });

        const searchInputRef = ref(null);

        // 菜单
        const handleClickMenuIcon = () => {
            store.commit(TOGGLE_MENU_VISIBILITY_M, true);
        };
        // logo
        const handleClickLogoIcon = () => {
            router.push("/home");
        };
        // 搜索
        const handleClickSearchIcon = async () => {
            if (state.isSearchActive) {
                state.isSearchActive = false;
            } else {
                state.isSearchActive = true;
                await nextTick();
                searchInputRef.value.focus();
            }
        };
        // 返回
        const handleClickBackIcon = () => router.back();
        // 收藏
        const handleClickColIcon = () => {};
        // 用户
        const handleClickUserIcon = () => {};
        // 搜索 触发
        const onSearch = (val) => {
            // console.log("=>", "onSearch", val);
            // store.commit(SET_SEARCHVALUE, val);

            const { query } = route;
            router.push({
                path: "/series",
                query: {
                    ...query,
                    search: val
                }
            });
        };
        // 搜索 失焦
        const onBlur = () => {
            // onSearch(state.searchValue);
            state.isSearchActive = false;
        };

        return {
            isBackShow: computed(() => {
                const whiteList = ["/detail", "/terms", "/privacy", "/about"];
                const path = route.path;
                return whiteList.includes(path);
            }),
            searchIconClass: computed(() => (state.isSearchActive ? "layout-nav-search-active" : "layout-nav-search")),
            handleClickMenuIcon,
            handleClickLogoIcon,
            handleClickSearchIcon,
            handleClickBackIcon,
            handleClickColIcon,
            handleClickUserIcon,
            onSearch,
            onBlur,
            searchInputRef,
            ...toRefs(state)
        };
    }
};
</script>




<style lang="scss" scoped>
.nav {
    position: relative;
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

    .search.active {
        color: $button-color;
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

.searchbox ::v-deep {
    position: absolute;
    bottom: -48px;
    right: 0;
    height: 48px;
    width: 100%;
    padding: 6px $container-padding;
    box-sizing: border-box;
    background-color: $container-bg-0;
    z-index: $sticky-index;

    .van-search {
        padding: 0;
        .van-search__field {
            flex-direction: row-reverse;
            padding: 0;

            .van-field__body {
                height: 100%;
                padding-right: 10px;
            }
            .van-field__left-icon {
                background: $button-color;
                border-radius: 0px 3px 3px 0px;
                width: 40px;
                height: 36px;
                text-align: center;

                .van-icon {
                    line-height: 36px;
                    color: $word-color-0;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>

