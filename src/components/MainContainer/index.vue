<!--
 * @Date: 2021-12-03
 * @Description: MainContainer组件
-->
<template>
  <div class="grid">
    <section class="header">
      <slot name="title"></slot>
    </section>
    <slot name="brand">
    </slot>
    <section class="content">
      <slot name="content"></slot>
    </section>

    <section
      class="footer"
      v-if="showFooter"
    >
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
import { useRouter } from "vue-router";

console.log("variables=>", variables);
export default {
    name: "MainContainer",
    props: {
        showFooter: {
            type: Boolean,
            default: true
        },
        series: {
            type: Object,
            default: () => ({ classifyName: "", classifyId: "", productList: [] })
        }
    },
    setup(props, context) {
        const router = useRouter();

        const handleClickSeeMore = () => {
            const { classifyName: name, classifyId: seriesId } = props.series;
            router.push({
                path: "/series",
                query: {
                    seriesId,
                    name
                }
            });
        };

        return {
            handleClickSeeMore,
            variables: computed(() => variables)
        };
    }
};
</script>

<style lang="scss" scoped>
.grid ::v-deep {
    // padding-top: $grid-padding-h;
    padding-top: $container-padding;
    padding-bottom: 24px;
    .header {
        @include font-b(20px);
        line-height: 29px;
        margin-left: $container-padding;
    }

    .footer {
        text-align: center;
        font-size: 0;
        .van-button {
            padding-right: 30px;
            padding-left: 30px;
        }
    }
}
</style>