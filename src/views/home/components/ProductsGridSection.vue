<!--
 * @Date: 2021-12-05
 * @Description: 
-->
<template>
  <MainContainer
    v-bind="$attrs"
    @onClickMore="onClickMore"
  >
    <template #title>
      {{series.classifyName}}
    </template>
    <template #content>
      <ProductsGrid
        class="grid"
        :grid-list="series.productList"
      >
        <template #item="{item}">
          <ProductsGridItem :data-source="item" />
        </template>
      </ProductsGrid>
    </template>
  </MainContainer>
</template>

<script>
import { reactive, provide, toRefs, computed } from "vue";
import { useStore } from "vuex";
import BetterScrollView from "@/components/BetterScrollView";

import MainContainer from "@/components/MainContainer";
import ProductsGrid from "@/components/ProductsGrid.vue";
import ProductsGridItem from "@/components/ProductsGridItem.vue";

export default {
    name: "ProductsGridSection",
    components: { BetterScrollView, MainContainer, ProductsGrid, ProductsGridItem },
    props: {
        seriesId: {
            type: Number,
            required: true
        }
    },
    setup(props, context) {
        const store = useStore();

        const onClickMore = () => {
            console.log("=>", "onLickMore");
        };

        provide("seriesId", props.seriesId);

        return {
            series: computed(
                () =>
                    store.state.seriesList.find((series) => series.classifyId === props.seriesId) || {
                        classifyName: "",
                        classifyList: []
                    }
            ),
            onClickMore
        };
    }
};
</script>


<style lang="scss" scoped>
.grid {
    margin-bottom: $grid-padding-h;
}
</style>