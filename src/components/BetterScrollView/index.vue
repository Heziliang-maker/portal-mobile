<!--
 * @Date: 2021-12-03
 * @Description: 
-->
<template>
  <div class="container">
    <div
      class="container-wrapper"
      ref="wrapperRef"
    >
      <div class="container-box">
        <slot>
          <div class="container-box-item">
            1
          </div>
          <div class="container-box-item">
            1
          </div>
          <div class="container-box-item">
            1
          </div>
          <div class="container-box-item">
            1
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import BScroll from "@better-scroll/core";
export default {
    name: "BetterScrollView",
    setup() {
        const wrapperRef = ref(null);
        const state = reactive({
            bs: null
        });
        onMounted(() => {
            const wrapper = wrapperRef.value;
            state.bs = new BScroll(wrapper, {
                scrollX: true,
                probeType: 3,
                bounce: true,
                eventPassthrough: "vertical"
            });
        });

        onBeforeUnmount(() => {
            state.bs.destroy();
        });

        return {
            wrapperRef,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    &-wrapper {
        position: relative;
        padding: 14px;
        white-space: nowrap;
        overflow: hidden;

        .container-box {
            display: inline-block;

            .container-box-item {
                width: 167px;
                height: 167px;
                display: inline-block;
                font-size: 0;
                vertical-align: top;
                &:not(:last-of-type) {
                    margin-right: 8px;
                }
                &:first-child {
                    margin-left: 14px;
                }
                &:last-of-type {
                    margin-right: 14px;
                }
            }
        }
    }
}
</style>