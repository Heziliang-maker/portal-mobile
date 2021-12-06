<!--
 * @Date: 2021-12-03
 * @Description:
 *  scrollList 数据列表 
 *  targetClass 列表单元的类名
 *  scrollTo 滚动方法
-->
<template>
  <div class="container">
    <div
      class="container-wrapper"
      ref="wrapperRef"
    >
      <div class="container-box">
        <div
          class="container-box-item"
          :class="targetClass"
          v-for="(item,index) in scrollList"
          :key="item[columnKey]"
        >
          <slot
            name="item"
            :item="item"
            :index="index"
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watch, toRefs, ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import BScroll from "@better-scroll/core";
export default {
    name: "BetterScrollView",
    props: {
        scrollList: {
            type: Array,
            default: () => []
        },
        targetClass: {
            type: String
        },
        // key 属性名
        columnKey: {
            type: String
        }
    },
    setup(props) {
        const wrapperRef = ref(null);
        const state = reactive({
            bs: null
        });

        const scrollTo = async (index) => {
            state.bs.refresh();
            await nextTick();
            state.bs.scrollTo(index);
        };

        onBeforeUnmount(() => {
            state.bs.destroy();
        });

        watch(
            () => props.scrollList,
            async (newValue, oldValue) => {
                await nextTick();
                const wrapper = wrapperRef.value;
                state.bs = new BScroll(wrapper, {
                    scrollX: true,
                    probeType: 3,
                    bounce: true,
                    eventPassthrough: "vertical"
                });
            }
        );

        return {
            wrapperRef,
            scrollTo,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    &-wrapper {
        position: relative;
        padding: $container-padding;
        white-space: nowrap;
        overflow: hidden;

        .container-box {
            display: inline-block;

            .container-box-item {
                display: inline-block !important;

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