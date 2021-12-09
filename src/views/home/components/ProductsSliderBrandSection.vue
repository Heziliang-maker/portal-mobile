<!--
 * @Date: 2021-12-05
 * @Description: ProductsSliderBrandSection
-->
<template>
  <MainContainer
    v-bind="$attrs"
    :series="series"
    class="maincontainer"
    :showFooter="false"
  >
    <template #title>
      Top Brand
    </template>

    <template #brand>
      <section class="brand">
        <div class="brand-banner">
          <van-image
            @click="handleClickClassifyBannerImg"
            fit="contain"
            src="http://buykop-ap.prd.buykop.com/images/2021-08-25/2/fd4225c5f19a45d0b599e80424b624f3.png"
          >
          </van-image>
        </div>
        <div class="brand-name">
          {{series.classifyName}}
        </div>
        <!--  v-if="series.classifyInfo" -->
        <div class="brand-desc">
          {{series.classifyInfo || 'Ecofimili-brand factory outlet store, and has a variety of products. Save the price difference of middlemen for global consumers, and give consumers the best and lowest product prices. Strict quality control, each product is carefully selected by us, the factory and the designer, so that you can buy the most cost-effective in different countries. Ecofimili will take every product detail issue seriously, trust, from now on.'}}
        </div>
      </section>
    </template>

    <template
      name='content'
      v-if="series.productList.length>0"
    >
      <BetterScrollView
        key="slider"
        class="scorllview"
        :scrollList="series.productList"
        targetClass="box"
        columnKey="productUrl"
      >
        <template #item="{item,index}">
          <ProductsGridItem :data-source="item" />
        </template>
      </BetterScrollView>
    </template>
  </MainContainer>
</template>

<script>
import { provide, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import MainContainer from "@/components/MainContainer";
import BetterScrollView from "@/components/BetterScrollView";
// import ProductsSliderItem from "@/components/ProductsSliderItem";
import ProductsGridItem from "@/components/ProductsGridItem";
export default {
    name: "ProductsSliderBrandSection",
    components: { MainContainer, BetterScrollView, ProductsGridItem },
    props: {
        seriesId: {
            type: Number,
            required: true
        }
    },
    setup(props, context) {
        const state = reactive({
            scrollList: []
        });

        const store = useStore();

        provide("seriesId", props.seriesId);

        const series = computed(
            () =>
                store.state.seriesList.find((series) => series.classifyId === props.seriesId) || {
                    classifyName: "",
                    productList: [],
                    classifyInfo: "",
                    classifyBannerImg: ""
                }
        );

        const handleClickClassifyBannerImg = () => series.classifyUrl && window.open(series.classifyUrl, "__blank");

        return {
            handleClickClassifyBannerImg,
            series
        };
    }
};
</script>

<style lang="scss" scoped>
.maincontainer ::v-deep {
    .brand {
        padding: 0 $container-padding;
        // margin: calc(#{$container-padding} / 2) 0 $container-padding;
        margin-top: calc(#{$container-padding} / 2);
        .brand-banner {
            height: auto;

            margin-bottom: calc(#{$container-padding} / 2);
            .van-image img {
                border-radius: $radius;
            }
        }
        .brand-name {
            @include font-b(20px);
            margin-bottom: calc(#{$container-padding} / 2);
            line-height: 24px;
        }
        .brand-desc {
            @include font-n(12px, $word-color-5);
            line-height: 18px;
        }
    }
    .box {
        // width: 200px;
        vertical-align: top;
        & > div {
            margin-bottom: $slider-padding-h;
        }
        & > div:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>