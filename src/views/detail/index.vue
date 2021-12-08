<!--
 * @Date: 2021-12-03
 * @Description: views/detail 产品详情
-->
<template>
  <div class="detail">
    <!-- Product Display -->
    <section class="product-display">
      <ProductDisplay
        :shop-info="shop"
        :data-source="data"
      />
    </section>
    <!-- Product Related -->
    <!-- <section class="product-related">
      <ProductsGridSection
        :showFooter="false"
        :series-id="1"
      />
    </section> -->
    <!--   Product Submitbtn -->
    <section class="product-submitbtn">
      <div
        class="product-submitbtn__col"
        @click="handleClickColIcon"
      >

        <img
          v-show="love"
          src="@/assets/images/global/global-col-active.png"
          alt="心愿单"
        >

        <img
          v-show="!love"
          src="@/assets/images/global/global-col-inactive.png"
          alt="心愿单"
        >

      </div>
      <van-button
        type="primary"
        block
        @click="handleClickBuy"
      >Enter The Brand Store</van-button>
    </section>

  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import { _product } from "@/api";

import ProductDisplay from "./components/ProductDisplay";
import ProductsGridSection from "@/views/home/components/ProductsGridSection";
export default {
    name: "Detail",
    components: { ProductDisplay, ProductsGridSection },
    setup() {
        const route = useRoute();
        const { appContext } = getCurrentInstance();
        const state = reactive({
            data: {},
            love: false,
            shop: {}
        });

        appContext.config.globalProperties.$loading.show();

        const init = async () => {
            const { query } = route;
            const body = JSON.parse(query.requestQuery);
            const res1 = await _product.queryProductsDetail(body);
            state.data = res1.result.data;
            const res2 = await _product.queryProductsShop({ shopId: body.shopId });
            state.shop = res2.result;
        };

        init();

        onMounted(async () => {
            await nextTick();
            appContext.config.globalProperties.$loading.hide();
            console.log("=>", "loaded");
        });

        const handleClickColIcon = () => (state.love = !state.love);

        const handleClickBuy = () => {
            const { url } = route.query;
            window.open(url, "_blank");
        };

        return {
            ...toRefs(state),
            handleClickBuy,
            handleClickColIcon
        };
    }
};
</script>


<style lang="scss" scoped>
.product-submitbtn ::v-deep {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 可以通过增加padding-bottom来适配 */
    // padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    // padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/

    width: 100%;
    box-sizing: border-box;
    background-color: $container-bg-0;
    z-index: $sticky-index;
    .product-submitbtn__col {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: 100%;
        background-color: $container-bg-3;
        border: 1px solid $border-color-3;
        font-size: 0;
        img {
            height: 16px;
            height: 16px;
            vertical-align: middle;
        }
    }
    .van-button {
        width: 240px;
        background-color: #ff8030;
        border: none;
        border-radius: 5px;
        @include font-n(14px, $word-color-0);
    }
}
</style>