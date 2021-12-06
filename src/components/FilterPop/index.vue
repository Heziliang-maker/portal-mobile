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
    <Filter @submit="submit" />
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
    emits: ["submit"],
    setup(props, context) {
        const store = useStore();

        const submit = (payload) => context.emit("submit", payload);

        return {
            isFilterShow: computed({
                // get: () => store.state.isFilterShow,
                get: () => store.state.isFilterShow,
                set: (v) => store.commit(TOGGLE_FILTER_VISIBILITY_M, v)
            }),
            submit
        };
    }
};
</script>

