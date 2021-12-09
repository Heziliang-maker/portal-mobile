<!--
 * @Date: 2021-12-08
 * @Description: Activity Pop
-->
<template>
  <van-popup
    class="activity"
    v-model:show="isActivityShow"
    close-on-popstate
    close-on-click-overlay
    safe-area-inset-bottom
    transition-appear
    teleport="body"
  >
    <!--     :overlay="false" -->
    <Activity />
  </van-popup>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Activity from "./Activity";

export default {
    name: "ActivityPop",
    components: { Activity },
    setup() {
        const store = useStore();

        const isActivityShow = computed(() => store.state.isActivityShow);

        return {
            isActivityShow
        };
    }
};
</script>

<style lang="scss" scoped>
// @include DEBUG;
</style>
