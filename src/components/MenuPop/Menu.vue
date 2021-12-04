<!--
 * @Date: 2021-12-04
 * @Description: Menu
-->
<template>
  <div
    v-for="menu in menuList"
    :key="menu.id"
    class="menu"
  >
    <div
      class="menu-main ellipsis"
      @click="handleClickMenu(menu.title)"
    >{{menu.title}}</div>
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
import variables from "@/styles/variables.scss";

console.log("variables=>", variables);
export default {
    name: "Menu",
    setup() {
        const state = reactive({
            menuList: [
                {
                    id: 1,
                    title: "Clothing＆Accessories"
                },
                {
                    id: 2,
                    title: "Electronic Digital"
                },
                {
                    id: 3,
                    title: "Outdoor＆Garden"
                }
            ]
        });

        const handleClickMenu = (title) => {
            console.log("点击菜单=>", title);
        };

        return {
            variables: computed(() => variables),
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