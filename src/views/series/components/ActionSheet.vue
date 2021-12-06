<!--
 * @Date: 2021-12-06
 * @Description: ActionSheet
-->
<template>
  <div class="actionsheet">

    <van-dropdown-menu>
      <van-dropdown-item
        v-model="value"
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
    <FilterPop />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import FilterPop from "@/components/FilterPop";
import { useStore } from "vuex";
import { TOGGLE_FILTER_VISIBILITY_M } from "@/store/base/mutations";
export default {
    name: "ActionSheet",
    components: { FilterPop },
    setup() {
        const store = useStore();
        const state = reactive({
            value: true
        });

        const value = ref(0);
        const switch1 = ref(false);
        const switch2 = ref(false);

        const options = [
            { text: "Price Low To High", value: false },
            { text: "Price High To Low", value: true }
        ];

        const handleClickFilter = () => {
            console.log("=>", "...");
            store.commit(TOGGLE_FILTER_VISIBILITY_M, true);
        };

        return {
            value,
            switch1,
            switch2,
            options,
            handleClickFilter,
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