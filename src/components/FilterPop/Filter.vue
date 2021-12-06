<!--
 * @Date: 2021-12-04
 * @Description: Menu
-->
<template>
  <div class="filter">
    <div class="filter-header">
      Price
    </div>
    <div class="filter-radio">
      <van-radio-group v-model="checked">
        <div class="radio-item">
          <van-radio
            icon-size="24px"
            name="1"
          >Less Than USD$25</van-radio>
        </div>
        <div class="radio-item">
          <van-radio
            icon-size="24px"
            name="2"
          >USD$25 ~ 50</van-radio>
        </div>
        <div class="radio-item">
          <van-radio
            icon-size="24px"
            name="3"
          >USD$50 ~ 100</van-radio>
        </div>
        <div class="radio-item">
          <van-radio
            icon-size="24px"
            name="4"
          >More Than USD$100</van-radio>
        </div>
        <div class="radio-item">
          <van-radio
            icon-size="24px"
            name="5"
          >Any Price </van-radio>
        </div>
      </van-radio-group>
    </div>
    <div class="filter-custom">
      <van-cell-group inset>
        <van-field
          :disabled="!isAnyAble"
          v-model="min"
          label="LOW"
          placeholder="From"
          type="digit"
        />
        <van-field
          :disabled="!isAnyAble"
          v-model="max"
          label="High"
          placeholder="To"
          type="digit"
        />
      </van-cell-group>
    </div>
    <div class="filter-btn">
      <van-button
        plain
        type="primary"
        @click="handleClickCancel"
      >Cancel</van-button>
      <van-button
        type="primary"
        @click="handleClickApply"
      >Apply</van-button>
    </div>

  </div>

</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import variables from "@/styles/variables.scss";
import { useStore } from "vuex";
import { TOGGLE_FILTER_VISIBILITY_M } from "@/store/base/mutations";

export default {
    name: "Menu",
    emits: ["submit"],
    setup(props, context) {
        const router = useRouter();

        const state = reactive({
            checked: "1",
            min: "",
            max: ""
        });

        const store = useStore();

        const closeOverlay = () => {
            store.commit(TOGGLE_FILTER_VISIBILITY_M, false);
        };

        const handleClickCancel = () => {
            state.checked = "1";
            state.min = state.max = "";

            closeOverlay();
        };
        const handleClickApply = () => {
            const checkedMap = {
                1: { min: 0, max: 25 },
                2: { min: 25, max: 50 },
                3: { min: 50, max: 100 },
                4: { min: 100, max: "" },
                5: { min: state.min, max: state.max }
            };

            const result = checkedMap[state.checked];

            context.emit("submit", result);

            closeOverlay();
        };

        return {
            variables: computed(() => variables),
            isAnyAble: computed(() => state.checked === "5"),
            handleClickCancel,
            handleClickApply,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.filter ::v-deep {
    height: 100%;
    padding-top: 24px;
    box-sizing: border-box;
    position: relative;
    .filter-header {
        @include font-b(14px, $word-color-1);
        line-height: 20px;

        margin-bottom: 18px;
    }
    .filter-radio .van-radio-group {
        .radio-item {
            margin: 12px 0;

            .van-radio__label {
                @include font-n(14px, $word-color-4);
                line-height: 20px;
            }
        }
    }
    .filter-custom {
        .van-field {
            padding-left: 0;
            .van-cell__title {
                width: 40px;
            }
        }
    }
    .filter-btn {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        bottom: 34px;
        .van-button {
            width: 130px;
        }
    }
}
</style>