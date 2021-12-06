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
          <div @click.stop="handleClickFilter">
            Filter
            <van-icon name="chat-o" />
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

        const value = ref(0);

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
        const watchFunc = async () => {
            const { seriesId } = route.query;

            state.filter.classifyId = seriesId;

            const body = {
                filter: { ...state.filter, classifyId: seriesId },
                asc: state.asc
            };
            console.log("请求参数=>", body);

            const { result } = await _product.querySeriesProducts(body);

            context.emit("load", result.data);

            console.log("res=>", result.data);
        };

        watch(() => [state.filter, state.asc], watchFunc, { immediate: true });

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
}
</style>