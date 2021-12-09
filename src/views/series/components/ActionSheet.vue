<!--
 * @Date: 2021-12-06
 * @Description: ActionSheet
-->
<template>
  <div class="actionsheet">
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="asc"
        :options="options"
      />

      <van-dropdown-item
        title="筛选"
        title-class="filter"
      >
        <template #title>
          <div
            class="filter-label"
            @click.stop="handleClickFilter"
          >
            Filter
            <svg-icon
              class="svgicon"
              icon-class="page-series-sort"
            ></svg-icon>
          </div>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
    <FilterPop @submit="onFilterSubmit" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
import FilterPop from "@/components/FilterPop";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { TOGGLE_FILTER_VISIBILITY_M } from "@/store/base/mutations";
import { _product } from "@/api";
export default {
    name: "ActionSheet",
    components: { FilterPop },
    emits: ["load"],
    setup(props, context) {
        const store = useStore();

        const route = useRoute();

        const state = reactive({
            asc: true,
            filter: { min: "", max: "" }
        });

        const options = [
            { text: "Price Low To High", value: false },
            { text: "Price High To Low", value: true }
        ];

        const handleClickFilter = () => {
            console.log("=>", "...");
            store.commit(TOGGLE_FILTER_VISIBILITY_M, true);
        };

        const onFilterSubmit = (filter) => {
            state.filter = { ...state.filter, ...filter };
        };

        // initsearch
        const watchFunc = async (newValue) => {
            const [filter, asc, query] = newValue;

            const { seriesId, name, search } = query;

            const body = {
                filter: { ...state.filter, classifyId: seriesId, productName: search },
                asc
            };
            console.log("请求参数=>", body);

            const { result } = await _product.querySeriesProducts(body);

            context.emit("load", { data: result.data, name });

            // console.log("res=>", result.data);
        };

        watch(() => [state.filter, state.asc, route.query], watchFunc, { immediate: true, deep: true });

        return {
            options,
            handleClickFilter,
            onFilterSubmit,
            watchFunc,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.actionsheet ::v-deep {
    .van-popup {
        height: auto;
    }
    .van-dropdown-menu__title:nth-of-type(1) {
        font-size: 14px;
        font-family: SourceHanSansSC-Normal, SourceHanSansSC;
        font-weight: 400;
        line-height: 20px;
    }
    .van-dropdown-menu__item:nth-of-type(2) {
        height: 100%;
        width: 100%;
        @include font-n(14px, $word-color-4);
        .van-dropdown-menu__title.filter {
            height: 100%;
            width: 100%;
            div {
                height: 100%;
                width: 100%;
            }
            .filter-label {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .svgicon {
                width: 16px;
                height: 16px;
            }
        }
    }
    .van-dropdown-menu__title.filter::after {
        display: none;
    }
    .van-dropdown-menu__bar {
        // box-shadow: 0 3px 6px rgba(100, 101, 102, 0.12);
        box-shadow: none;
        // box-shadow
    }
}
</style>