<!--
 * @Date: 2021-12-04
 * @Description: Grid
-->
<template>
  <van-grid
    :center="false"
    :border="false"
    :column-num="2"
  >
    <van-grid-item
      v-for="(item,index) in gridList"
      :key="item.productUrl"
      v-jumpTo="{url:item.productUrl,type:2,id:item.id,shopId:item.shopId,
        detailQuery:{
          productId:item.productId,
          shopId:item.shopId
        }
        }"
    >
      <slot
        name="item"
        :item="item"
      ></slot>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
    name: "Grid",
    props: {
        gridList: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit }) {
        const updateGrid = (productUrl) => emit("update", productUrl);
        return { updateGrid };
    }
};
</script>

<style lang="scss" scoped>
.van-grid ::v-deep {
    width: calc(100vw - ((#{$container-padding} - #{$grid-padding-v}) * 2));
    margin: 0 auto;
    .van-grid-item {
        width: 50%;
        flex-grow: 0;
        overflow: hidden;
    }
}
</style>