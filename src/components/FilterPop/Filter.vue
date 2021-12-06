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
          v-model="min"
          label="LOW"
          placeholder="From"
        />
        <van-field
          v-model="max"
          label="High"
          placeholder="To"
        />
      </van-cell-group>
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

    setup(props, context) {
        const router = useRouter();

        const state = reactive({
            checked: "1"
        });

        const store = useStore();

        const closeOverlay = () => {
            store.commit(TOGGLE_FILTER_VISIBILITY_M, false);
        };

        const handleClickMenu = () => {
            // close
            closeOverlay();
            // router push
        };

        return {
            variables: computed(() => variables),
            menuList: computed(() => store.state.seriesList),
            handleClickMenu,
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
            // width: 40px;
            .van-cell__title {
                width: 40px;
            }
        }
    }
}
</style>