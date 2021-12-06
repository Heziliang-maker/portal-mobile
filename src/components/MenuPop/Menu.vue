<!--
 * @Date: 2021-12-04
 * @Description: Menu
-->
<template>
  <div
    v-for="menu in menuList"
    :key="menu.classifyId"
    class="menu"
  >
    <div
      class="menu-main van-ellipsis"
      @click="handleClickMenu(menu.classifyId,menu.classifyName)"
    >{{menu.classifyName}}</div>
    <div class="menu-icon">
      <van-icon
        name="arrow"
        size="8"
        :color="variables.iconColorGray"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import variables from "@/styles/variables.scss";
import { useStore } from "vuex";
import { TOGGLE_MENU_VISIBILITY_M } from "@/store/base/mutations";
// console.log("variables=>", variables);
export default {
    name: "Menu",

    setup(props, context) {
        const router = useRouter();

        const state = reactive({});

        const store = useStore();

        const closeOverlay = () => {
            store.commit(TOGGLE_MENU_VISIBILITY_M, false);
        };

        const handleClickMenu = (seriesId, name) => {
            // close
            closeOverlay();
            // router push
            router.push({
                path: "/series",
                query: {
                    seriesId,
                    name
                }
            });
        };

        return {
            variables: computed(() => variables),
            menuList: computed(() => store.state.seriesList),
            handleClickMenu,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.menu {
    margin: 24px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0;

    .menu-main {
        flex: 1 0 auto;
        @include font-n();
        line-height: 20px;
    }
    .menu-icon {
        flex: 0 0 20px;
        margin-left: auto;

        .van-icon {
            line-height: 20px;
        }
    }
}
</style>