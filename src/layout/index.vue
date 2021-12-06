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
    <!-- menupop -->
    <div class="menupop">
      <MenuPop />
    </div>
  </div>
</template>


<script>
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import MenuPop from "@/components/MenuPop";
export default {
    name: "Layout",
    components: { TheNav, TheFooter, MenuPop },
    setup() {}
};
</script>
<style lang="scss" scoped>
#container ::v-deep {
    @include DEBUG;
    padding-top: $trans-height;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $container-bg-0;

    .container-main {
        // min-height: 800px;
    }
}
</style>