<!--
 * @Date: 2021-12-04
 * @Description: MenuPop
-->
<template>
  <!-- popup -->
  <van-popup
    class="menu"
    v-model:show="isMenuShow"
    close-on-popstate
    close-on-click-overlay
    position="left"
    safe-area-inset-bottom
    teleport="body"
  >
    <Menu />
  </van-popup>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { TOGGLE_MENU_VISIBILITY_M } from "@/store/base/mutations";
import { reactive, toRefs } from "vue";

import Menu from "./Menu.vue";

export default {
    name: "MenuPop",
    components: { Menu },
    setup() {
        const store = useStore();

        return {
            isMenuShow: computed({
                get: () => store.state.isMenuShow,
                set: (v) => store.commit(TOGGLE_MENU_VISIBILITY_M, v)
            })
        };
    }
};
</script>

