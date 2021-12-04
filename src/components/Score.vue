<!--
 * @Date: 2021-12-04
 * @Description: Score 评分
-->
<template>
  <div class="score">
    <van-rate
      class="score-star"
      v-bind="$attrs"
      color="#FEC600"
      void-icon="star"
      allow-half
      void-color="#eee"
    />
    <span class="score-num">
      <a>{{ $attrs.value }} points</a>
    </span>
  </div>
</template>

<script>
export default {
    name: "Score"
};
</script>

<style lang="scss" scoped>
.score {
    line-height: 12px;
    margin: 6px 0;
}
.score-star {
    margin-right: 4px;
    // height: 30px;
}
.score-num {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    vertical-align: middle;
}
</style>