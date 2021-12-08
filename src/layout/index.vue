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
      <ActivityPop :key="activityPopKey" />
    </div>
    <transition name="van-slide-right">
      <div
        v-show="isActivityLinkShow"
        class="activitybtn"
        @click="handleClickActivityLink"
      >
        <img
          src="@/assets/images/global/global-activity-link.png"
          alt="activity"
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
import { ref, computed, onMounted, nextTick, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { TOGGLE_ACTIVITY_VISIBILITY_M } from "@/store/base/mutations";
import { useCheckEmailIsFill } from "@/utils/tools";
export default {
    name: "Layout",
    components: { TheNav, TheFooter, MenuPop, Loading, ActivityPop },
    setup() {
        const store = useStore();

        const activityPopKey = ref(0);

        const isActivityLinkShow = ref(false);

        const activityTimer = ref(null);

        const keep = ref(["Home"]);

        const loading = computed(() => store.state.isGlobalLoading);

        const handleClickActivityLink = () => store.commit(TOGGLE_ACTIVITY_VISIBILITY_M, true);

        const [isFill, value, setValue] = useCheckEmailIsFill();

        onMounted(async () => {
            // 等待挂载完成
            await nextTick();
            // console.log("=>", "layout mounted all");
            // 显示折扣信息
            isActivityLinkShow.value = true;
            // 未填过邮箱 自动打开弹框
            if (!isFill) {
                //  设置step 1
                setValue("1");
                // 延迟打开
                activityTimer.value = setTimeout(() => {
                    handleClickActivityLink();
                }, 1000);
            }
        });

        onBeforeUnmount(() => {
            // 清除定时器
            clearTimeout(activityTimer.value);
        });

        return {
            loading,
            keep,
            activityPopKey,
            isActivityLinkShow,
            handleClickActivityLink
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
    .activitybtn {
        position: fixed;
        right: 15px;
        bottom: 50px;
        transition: opacity 0.4s linear;
        transition-delay: 0.3s;
        z-index: 99;

        > img {
            // width: 102px;
            width: 80px;
        }
    }
}
</style>