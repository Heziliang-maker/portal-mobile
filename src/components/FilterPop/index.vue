<!--
 * @Date: 2021-12-04
 * @Description: MenuPop
-->
<template>
  <!-- popup -->
  <van-popup
    v-model:show="isFilterShow"
    close-on-popstate
    close-on-click-overlay
    safe-area-inset-bottom
    position="right"
    teleport="body"
  >
    <Filter />
  </van-popup>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { TOGGLE_FILTER_VISIBILITY_M } from "@/store/base/mutations";
import { reactive, toRefs } from "vue";

import Filter from "./Filter.vue";

export default {
    name: "FilterPop",
    components: { Filter },
    setup() {
        const store = useStore();

        return {
            isFilterShow: computed({
                // get: () => store.state.isFilterShow,
                get: () => store.state.isFilterShow,
                set: (v) => store.commit(TOGGLE_FILTER_VISIBILITY_M, v)
            })
        };
    }
};
</script>

