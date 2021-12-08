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
    <Loading v-if="loading" />
    <div class="container-main">
      <router-view v-slot="{ Component }">
        <keep-alive :include="keep">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <!-- footer -->
    <div class="container-footer notranslate">
      <TheFooter />
    </div>
    <!-- menupop -->
    <div class="menupop">
      <MenuPop />
    </div>
    <div class="activitypop">
      <ActivityPop />
    </div>
    <transition name="van-slide-right">
      <div
        class="discountbtn"
        @click="handleClickDiscount"
      >
        <img
          src="@/assets/images/global/dialog_btn.png"
          alt="discount"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import MenuPop from "@/components/MenuPop";
import ActivityPop from "@/components/ActivityPop";
import Loading from "@/components/Loading";
import { ref, computed, useSlots } from "vue";
import { useStore } from "vuex";
import { TOGGLE_ACTIVITY_VISIBILITY_M } from "@/store/base/mutations";

export default {
    name: "Layout",
    components: { TheNav, TheFooter, MenuPop, Loading, ActivityPop },
    setup() {
        const store = useStore();

        const keep = ref(["Home"]);

        const loading = computed(() => store.state.isGlobalLoading);

        const handleClickDiscount = () => store.commit(TOGGLE_ACTIVITY_VISIBILITY_M, true);

        return {
            loading,
            keep,
            handleClickDiscount
        };
    }
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
    .discountbtn {
        position: fixed;
        right: 15px;
        bottom: 50px;
        transition: opacity 0.4s linear;
        transition-delay: 0.3s;
        z-index: 99;

        > img {
            width: 102px;
        }
    }
}
</style>