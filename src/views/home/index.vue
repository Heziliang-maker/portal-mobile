<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <div class="gap"></div>
  <section class="banner">
    <BannerSwiper />
  </section>
  <!-- new-week -->
  <section class="new-week">
    <ProductsGridSection :series-id="1" />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- hot-new -->
  <section class="hot-new">
    <ProductsSliderSection :series-id="2" />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- clothing -->
  <section class="outdoor-garden">
    <ProductsSliderComplexSection :series-id="1" />
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
    <ProductsGridSection :series-id="4" />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- clothing -->
  <section class="top-brand">
    <div class="top-brand__title">
      Top Brand
    </div>
    <ProductsSliderBrandSection :series-id="7" />
    <ProductsSliderBrandSection :series-id="8" />
    <ProductsSliderBrandSection :series-id="9" />
  </section>
  <!-- clothing -->
  <section class="top-brand">

  </section>
  <!-- electronic -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="5" />
  </section> -->
  <!-- outdoor-garden -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="6" />
  </section> -->
  <!-- outdoor-garden -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="7" />
  </section> -->
  <!-- outdoor-garden -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="8" />
  </section> -->
  <!-- outdoor-garden -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="9" />
  </section> -->
  <!-- outdoor-garden -->
  <!-- <section class="outdoor-garden">
    <ProductsGridSection :series-id="10" />
  </section> -->
</template>


<script>
import { reactive, provide, computed, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { _product } from "@/api";
// 轮播展示
import BannerSwiper from "./components/BannerSwiper";
//  商品宫格展示
import ProductsGridSection from "./components/ProductsGridSection.vue";
// 商品滚动展示
import ProductsSliderSection from "./components/ProductsSliderSection.vue";
// 商品滚动特殊展示
import ProductsSliderComplexSection from "./components/ProductsSliderComplexSection.vue";
// 品牌+ 商品滚动展示
import ProductsSliderBrandSection from "./components/ProductsSliderBrandSection.vue";
// 分类展示
import CategoriesSection from "./components/CategoriesSection.vue";
import { QUERY_PORTAL_A } from "@/store/base/actions";
export default {
    name: "Home",
    components: {
        BannerSwiper,
        ProductsGridSection,
        ProductsSliderSection,
        ProductsSliderComplexSection,
        ProductsSliderBrandSection,
        CategoriesSection
    },
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
.gap {
    height: 1px;
    background-color: $container-bg-2;
}
.banner {
    position: relative;
    width: 100%;
    padding: $container-padding;
    box-sizing: border-box;
    background-color: $container-bg-2;
    // 遮挡阴影
    &::before {
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #f6f6f6;
    }
}
.new-week {
    // margin-top: $grid-padding-h;
}
.hot-new {
    // margin-top: $grid-padding-h;
}
.shop-categories {
    // margin-top: $grid-padding-h;
}
.top-brand__title {
    @include font-b(20px);
    line-height: 29px;
    margin-left: $container-padding;
    margin-top: $container-padding;
}
</style>