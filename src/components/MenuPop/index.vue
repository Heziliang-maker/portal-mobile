<!--
 * @Date: 2021-12-04
 * @Description: MenuPop
-->
<template>
  <!-- popup -->
  <van-popup
    v-model:show="isMenuShow"
    close-on-popstate
    close-on-click-overlay
    position="left"
    @click-overlay="onClickOverlay"
  >
    <Menu />
  </van-popup>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { TOGGLE_MENU_VISIBILITY } from "@/store/base/mutations";
import { reactive, toRefs } from "vue";

import Menu from "./Menu.vue";

export default {
    name: "MenuPop",
    components: { Menu },
    setup() {
        const store = useStore();

        const onClickOverlay = () => {
            store.commit(TOGGLE_MENU_VISIBILITY, false);
        };

        return {
            onClickOverlay,
            isFooterVisible: computed(() => store.state.isFooterVisible),
            isMenuShow: computed(() => store.state.isMenuShow)
        };
    }
};
</script>

