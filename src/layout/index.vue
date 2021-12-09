<!--
 * @Date: 2021-12-03
 * @Description: layout 入口组件
-->

<template>
  <!-- container -->
  <div id="container">
    <div class="container-trans"></div>
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
        v-show="isActivityLinkAble && isActivityLinkShow"
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
import { ref, computed, onMounted, nextTick, onBeforeUnmount, getCurrentInstance, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { TOGGLE_ACTIVITY_VISIBILITY_M } from "@/store/base/mutations";
import { QUERY_LANGUAGE_A, SELECT_LANGUAGE_A } from "@/store/modules/language";
console.log("QUERY_LANGUAGE_A=>", QUERY_LANGUAGE_A);
import { useCheckEmailIsFill } from "@/utils/tools";
import cookie from "@/utils/cookie";

export default {
    name: "Layout",
    components: { TheNav, TheFooter, MenuPop, Loading, ActivityPop },
    setup() {
        const { appContext } = getCurrentInstance();

        const store = useStore();

        const route = useRoute();

        const activityPopKey = ref(0);

        const isActivityLinkShow = ref(false);

        const isActivityLinkAble = computed(() => {
            const { path } = route;
            const blackList = ["/detail", "/series"];
            return !blackList.includes(path);
        });

        const state = reactive({
            // 更改前的语言
            originLang: ""
        });

        const activityTimer = ref(null);

        const languageTimer = ref(null);

        const keep = ref(["Home"]);

        const loading = computed(() => store.state.isGlobalLoading);

        const handleClickActivityLink = () => store.commit(TOGGLE_ACTIVITY_VISIBILITY_M, true);

        const [isFill, value, setValue] = useCheckEmailIsFill();

        const $translate = appContext.config.globalProperties.$translate;

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

            // 查询语言
            await store.dispatch(`language/${QUERY_LANGUAGE_A}`, (language) => {
                //
                // console.log("查询语言 结果是=>", language);
                //根据货币 汇率 渲染格式化
                $translate(language);
            });

            // 轮询
            languageTimer.value = setInterval(async () => {
                // cookie中当前的语言
                const cookieLang = cookie.get("googtrans");

                if (state.originLang !== cookieLang) {
                    //触发语言切换
                    await store.dispatch(`language/${SELECT_LANGUAGE_A}`, cookieLang);
                    // 替换
                    state.originLang = cookieLang;
                }
            }, 500);
        });

        onBeforeUnmount(() => {
            // 清除定时器
            clearTimeout(activityTimer.value);
            clearInterval(languageTimer.value);
        });

        return {
            loading,
            keep,
            activityPopKey,
            isActivityLinkShow,
            handleClickActivityLink,
            isActivityLinkAble,
            ...toRefs(state)
        };
    }
};
</script>
<style lang="scss" scoped>
#container ::v-deep {
    // @include DEBUG;
    // padding-top: $trans-height;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $container-bg-0;

    .container-trans {
        height: $trans-height;
        background-color: $container-bg-1;
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