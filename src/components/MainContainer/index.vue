<!--
 * @Date: 2021-12-03
 * @Description: MainContainer组件
-->
<template>
  <div class="grid">
    <section class="header">
      <slot name="title">标题</slot>
    </section>
    <section class="content">
      <!-- <Grid v-bind="$attrs" /> -->
      <slot name="content"></slot>
    </section>

    <section class="footer">
      <slot name="footer">
        <van-button
          :color="variables.buttonMainColor"
          size="small"
          plain
          @click="handleClickSeeMore"
        >See More</van-button>
      </slot>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import variables from "@/styles/variables.scss";

console.log("variables=>", variables);
export default {
    name: "MainContainer",
    emits: ["onLickMore"],
    setup(prop, { emit }) {
        const handleClickSeeMore = () => emit("onLickMore");
        return {
            handleClickSeeMore,
            variables: computed(() => variables)
        };
    }
};
</script>

<style lang="scss" scoped>
.grid ::v-deep {
    padding-top: $grid-padding-h;
    padding-bottom: 24px;
    .header {
        @include font-b(20px);
        line-height: 29px;
        margin-left: $container-padding;
    }
    .footer {
        text-align: center;
        .van-button {
            padding-right: 30px;
            padding-left: 30px;
        }
    }
}
</style>