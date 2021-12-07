<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <section class="banner">
    <BannerSwiper />
  </section>
  <!-- new-week -->
  <section class="new-week">
    <ProductsGridSection :series-id="1" />
  </section>
  <!-- hot-new -->
  <section class="hot-new">
    <ProductsSliderSection :series-id="2" />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- Shop By Categories -->
  <section class="shop-categories">
    <CategoriesSection />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- clothing -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="3" />
  </section>
  <!-- clothing -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="4" />
  </section>
  <!-- electronic -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="5" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="6" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="7" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="8" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="9" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="10" />
  </section>
</template>


<script>
import { reactive, provide, computed, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { _product } from "@/api";
import BannerSwiper from "./components/BannerSwiper";
import ProductsGridSection from "./components/ProductsGridSection.vue";
import ProductsSliderSection from "./components/ProductsSliderSection.vue";
import CategoriesSection from "./components/CategoriesSection.vue";
import { QUERY_PORTAL_A } from "@/store/base/actions";
export default {
    name: "Home",
    components: { BannerSwiper, ProductsGridSection, ProductsSliderSection, CategoriesSection },
    setup() {
        const state = reactive({
            seriesList: [],
            isLoading: false
        });

        state.isLoading = true;

        const { appContext } = getCurrentInstance();

        appContext.config.globalProperties.$loading.show();

        onMounted(async () => {
            // 等待子组件
            await nextTick();
            console.log("=>", "... mounted");
            appContext.config.globalProperties.$loading.hide();
        });

        // const store = useStore();

        // store.dispatch(QUERY_PORTAL_A);

        return {
            ...toRefs(state)
        };
    }
};
</script>



<style lang="scss" scoped>
.banner {
    width: 100%;
    padding: $container-padding;
    box-sizing: border-box;
    background-color: $container-bg-2;
}
.new-week {
    margin-top: $grid-padding-h;
}
.hot-new {
    margin-top: $grid-padding-h;
}
.shop-categories {
    margin-top: $grid-padding-h;
}
</style>