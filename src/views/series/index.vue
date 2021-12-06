<!--
 * @Date: 2021-12-03
 * @Description: views/series 查看系列
-->
<template>

  <div class="series">
    <!-- header -->
    <div class="series-header">
      <ActionSheet @load="onLoad" />
    </div>

    <div
      class="series-loading"
      v-if="isLoading"
    >
      <van-loading />
    </div>
    <!-- gutter -->
    <div class="gutter"></div>
    <!-- main -->
    <div class="series-main">
      <MainContainer :showFooter="false">
        <template #title>
          {{name}}
        </template>
        <template #content>
          <ProductsGrid
            class="grid"
            :grid-list="productList"
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
import { watch, reactive, provide, toRefs, computed, ref } from "vue";
import BetterScrollView from "@/components/BetterScrollView";
import { _product } from "@/api";
import MainContainer from "@/components/MainContainer";
import ProductsGrid from "@/components/ProductsGrid.vue";
import ProductsGridItem from "@/components/ProductsGridItem.vue";
import ActionSheet from "./components/ActionSheet.vue";
export default {
    name: "Series",
    components: { BetterScrollView, MainContainer, ProductsGrid, ProductsGridItem, ActionSheet },
    setup(props, context) {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();

        const state = reactive({
            seriesId: "",
            name: "",
            productList: [],
            isLoading: true
        });

        state.isLoading = true;

        console.log("route=>", route);

        const onLoad = (data) => {
            state.productList = data;
            state.isLoading = false;
        };

        provide("seriesId", state.seriesId);

        watch(route, (newValue, oldValue) => {});

        return {
            ...toRefs(state),
            series: computed(
                () =>
                    store.state.seriesList.find((series) => series.classifyId === state.seriesId) || {
                        classifyName: "",
                        classifyList: []
                    }
            ),
            onLoad
        };
    }
};
</script>

<style lang="scss" scoped>
.series-loading {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>