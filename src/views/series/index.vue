<!--
 * @Date: 2021-12-03
 * @Description: views/series 查看系列
-->
<template>

  <div class="series">
    <!-- header -->
    <div class="series-header">
      <ActionSheet />
    </div>
    <!-- gutter -->
    <div class="gutter"></div>
    <!-- main -->
    <div class="series-main">
      <MainContainer :showFooter="false">
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
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { watch, reactive, provide, toRefs, computed } from "vue";
import BetterScrollView from "@/components/BetterScrollView";
import { _product } from "@/api";
import MainContainer from "@/components/MainContainer";
import ProductsGrid from "@/components/ProductsGrid.vue";
import ProductsGridItem from "@/components/ProductsGridItem.vue";
import ActionSheet from "./components/ActionSheet.vue";
export default {
    name: "Series",
    components: { BetterScrollView, MainContainer, ProductsGrid, ProductsGridItem, ActionSheet },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();

        const state = reactive({
            seriesId: "",
            name: "",
            filter: {
                maxPirce: null,
                minPirce: null,
                productName: null,
                classifyId: null
            },
            asc: false,
            seriesList: []
        });

        console.log("route=>", route);

        const init = async () => {
            const { seriesId, name } = route.query;

            state.seriesId = seriesId;
            state.name = name;

            const body = {};

            const res = await _product.querySeriesProducts(body);
        };

        init();

        provide("seriesId", state.seriesId);

        watch(route, (newValue, oldValue) => {
            init();
        });

        return {
            ...toRefs(state),
            series: computed(
                () =>
                    store.state.seriesList.find((series) => series.classifyId === state.seriesId) || {
                        classifyName: "",
                        classifyList: []
                    }
            )
        };
    }
};
</script>

<style lang="scss" scoped>
</style>