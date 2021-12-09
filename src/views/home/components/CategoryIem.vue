<!--
 * @Date: 2021-12-05
 * @Description: CategoryIem
-->
<template>
  <div
    class="category"
    @click="handleClickCategory"
  >
    <div class="category-pic">
      <img
        :src="dataSource.classifyImg"
        alt=""
      >
    </div>
    <div class="category-name van-multi-ellipsis--l2">
      {{dataSource.classifyName}}
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name: "CategoryIem",
    props: {
        dataSource: {
            type: Object,
            default: () => {}
        },
        groupIndex: {
            type: Number,
            required: true
        },
        selfIndex: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();

        const handleClickCategory = () => {
            // router push
            router.push({
                path: "/series",
                query: {
                    seriesId: props.dataSource.classifyId,
                    name: props.dataSource.classifyName
                }
            });
        };

        return {
            handleClickCategory
        };
    }
};
</script>

<style lang="scss" scoped>
.category {
    width: 70px;
    height: 98px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .category-pic {
        width: 58px;
        height: 58px;
        background: #ededed;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        img {
            width: 38px;
            height: 38px;
        }
    }

    .category-name {
        width: 100%;
        white-space: pre-wrap;
        @include font-n(13px, $word-color-4);
        text-align: center;
    }
}
</style>