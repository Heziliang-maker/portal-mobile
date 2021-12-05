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
      <a>{{ $attrs.modelValue }} points</a>
    </span>
  </div>
</template>



<script>
export default {
    name: "Score",
    setup() {
        return {};
    }
};
</script>


<style lang="scss" scoped>
.score {
    line-height: 18px;
    margin: 6px 0;
}
.score-star {
    margin-right: 4px;
    // height: 30px;
}
.score-num {
    @include font-n(12px, $word-color-4);
    line-height: 18px;
    vertical-align: middle;
}
</style>