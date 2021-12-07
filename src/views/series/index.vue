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

    <Loading v-if="isLoading" />

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
import Loading from "@/components/Loading";
export default {
    name: "Series",
    components: { BetterScrollView, MainContainer, ProductsGrid, ProductsGridItem, ActionSheet, Loading },
    setup(props, context) {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();

        const state = reactive({
            name: "",
            productList: [],
            isLoading: true
        });

        state.isLoading = true;

        const { seriesId } = route.query;

        watch(route.query, () => {
            console.log("=>", "... changed");
        });

        provide("seriesId", seriesId);

        const onLoad = ({ data, name }) => {
            state.productList = data;
            state.name = name;
            state.isLoading = false;
        };

        provide("seriesId", state.seriesId);

        return {
            ...toRefs(state),

            onLoad
        };
    }
};
</script>

<style lang="scss" scoped>
</style>