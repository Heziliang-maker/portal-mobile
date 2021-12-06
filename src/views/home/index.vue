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
    <ProductsSliderSection />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- Shop By Categories -->
  <section class="shop-categories">
    <CategoriesSection />
  </section>
  <!-- clothing -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="0" />
  </section>
  <!-- electronic -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="2" />
  </section>
  <!-- outdoor-garden -->
  <section class="outdoor-garden">
    <ProductsGridSection :series-id="3" />
  </section>
</template>


<script>
import { reactive, provide, computed, toRefs } from "vue";
import { useStore } from "vuex";
import BannerSwiper from "./components/BannerSwiper";
import ProductsGridSection from "./components/ProductsGridSection.vue";
import ProductsSliderSection from "./components/ProductsSliderSection.vue";
import CategoriesSection from "./components/CategoriesSection.vue";

import { QUERY_PORTAL_A } from "@/store/base/actions";
export default {
    name: "Home",
    components: { BannerSwiper, ProductsGridSection, ProductsSliderSection, CategoriesSection },
    setup() {
        const state = reactive({});

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