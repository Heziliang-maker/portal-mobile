<!--
 * @Date: 2021-12-05
 * @Description: ProductsSliderComplexSection
-->
<template>
  <MainContainer
    v-bind="$attrs"
    :series="series"
    class="maincontainer"
  >
    <template #title>
      {{series.classifyName}}
    </template>
    <template #content>
      <BetterScrollView
        key="slider"
        class="scorllview"
        :scrollList="series.productList"
        targetClass="box"
        columnKey="productUrl"
      >
        <template #item="{item,index}">
          <ProductsGridItem
            complex
            :data-source="item"
          />
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
    name: "ProductsSliderComplexSection",
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

        return {
            series: computed(
                () =>
                    store.state.seriesList.find((series) => series.classifyId === props.seriesId) || {
                        classifyName: "",
                        productList: []
                    }
            )
        };
    }
};
</script>

<style lang="scss" scoped>
.maincontainer ::v-deep {
    position: relative;
    background: red;
    background-image: url("~@/assets/images/global/global-slide-bg.png");
    background-position: right bottom;
    background-size: cover;
    background-repeat: no-repeat;
    .scorllview {
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
    .header {
        color: #d8c190;
    }
    .content * {
        color: $word-color-0 !important;
    }
    .footer .van-button {
        color: $word-color-0 !important;
        border-color: $word-color-0 !important;
        background: none;
    }
}

.maincontainer::before {
    content: "";
    display: content;
    width: 52px;
    height: 55px;
    // background-color: red;
    position: absolute;
    top: -20px;
    left: 0;
    background-image: url("~@/assets/images/global/global-slide-ballon.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>