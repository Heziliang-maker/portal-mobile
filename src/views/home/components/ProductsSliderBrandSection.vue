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
    </template>
    <template #brand>
      <section class="brand">
        <div class="brand-banner">
          <van-image
            @click="handleClickClassifyBannerImg"
            fit="cover"
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
    <!--    v-if="series.productList.length>0" -->
    <template #content>
      <!--         :scrollList="series.productList" -->
      <BetterScrollView
        key="brand-slider"
        class="scorllview"
        targetClass="box"
        :scrollList="scrollList"
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
        setTimeout(() => {
            state.scrollList = [
                {
                    ccy: "USD",
                    productId: "617",
                    productImg:
                        "http://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-06-24/1175/c54cff9ce1214e40a06bc200644c79ff.jpg",
                    productName: "iPad Pro 11 inch",
                    productSort: 5,
                    productUrl: "https://apple.dev.buykop.com/system/detail/617?buykopPortal=4",
                    reamt: 1187.96,
                    retailPrice: 1052.18,
                    shopId: "+ebKAcmQ4SDdKiela9SUpg==",
                    starLevel: 3.5,
                    video: null,
                    videoCover: null
                },
                {
                    ccy: "USD",
                    productId: "617",
                    productImg:
                        "http://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-06-24/1175/c54cff9ce1214e40a06bc200644c79ff.jpg",
                    productName: "iPad Pro 11 inch",
                    productSort: 5,
                    productUrl: "https://apple.dev.buykop.com/system/detail/617?buykopPortal=4",
                    reamt: 1187.96,
                    retailPrice: 1052.18,
                    shopId: "+ebKAcmQ4SDdKiela9SUpg==",
                    starLevel: 3.5,
                    video: null,
                    videoCover: null
                },
                {
                    ccy: "USD",
                    productId: "617",
                    productImg:
                        "http://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-06-24/1175/c54cff9ce1214e40a06bc200644c79ff.jpg",
                    productName: "iPad Pro 11 inch",
                    productSort: 5,
                    productUrl: "https://apple.dev.buykop.com/system/detail/617?buykopPortal=4",
                    reamt: 1187.96,
                    retailPrice: 1052.18,
                    shopId: "+ebKAcmQ4SDdKiela9SUpg==",
                    starLevel: 3.5,
                    video: null,
                    videoCover: null
                }
            ];
        }, 800);

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
            series,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.maincontainer ::v-deep {
    .container-wrapper {
        padding-bottom: 0;
    }
    .brand {
        padding: 0 $container-padding;
        .brand-banner {
            height: auto;
            font-size: 0;
            // margin-bottom: calc(#{$container-padding} / 2);
            .van-image {
                width: 100%;
                height: 188px;
            }
            img {
                border-radius: $radius;
            }
        }
        .brand-name {
            @include font-b(20px);
            margin: calc(#{$container-padding} / 2) 0;
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