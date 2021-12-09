<!--
 * @Date: 2021-12-05
 * @Description: ProductsSlider
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
        key="slider-simple"
        class="scorllview"
        :scrollList="series.productList"
        targetClass="box"
        columnKey="productUrl"
      >
        <template #item="{item,index}">
          <ProductsSliderItem
            v-for="(sitem,sindex) in item"
            :group-index="index"
            :self-index="sindex+1"
            :data-source="sitem"
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
import ProductsSliderItem from "@/components/ProductsSliderItem";
export default {
    name: "ProductsSliderSection",
    components: { MainContainer, BetterScrollView, ProductsSliderItem },
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
    .scorllview {
    }
    .box {
        // width: 200px;
        vertical-align: top;
        & > div {
            margin-bottom: 8px;
        }
        & > div:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>