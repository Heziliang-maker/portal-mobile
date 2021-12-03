<!--
 * @Date: 2021-12-03
 * @Description: layout 入口组件
-->

<template>
  <!-- container -->
  <div id="container">
    <!-- header -->
    <div class="container-header">
      <van-sticky>
        <TheNav />
      </van-sticky>
    </div>
    <!-- main -->
    <div class="container-main">
      <router-view></router-view>
    </div>
    <!-- footer -->
    <div class="container-footer notranslate">
      <TheFooter />
    </div>
  </div>
</template>


<script>
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
export default {
    name: "Layout",
    components: {
        TheNav,
        TheFooter
    },
    setup() {
        const store = useStore();

        return { isFooterVisible: computed(() => store.state.isFooterVisible) };
    }
};
</script>
<style lang="scss" scoped>
#container ::v-deep {
    @include DEBUG;
    padding-top: $trans-height;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $container-bg1;

    .container-main {
        min-height: 800px;
    }
}
</style>