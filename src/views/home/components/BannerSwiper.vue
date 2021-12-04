<!--
 * @Date: 2021-12-04
 * @Description: Banner Swiper
-->
<template>
  <van-swipe class="banner-swiper">
    <!-- :autoplay="1000" -->
    <van-swipe-item
      class="swipe-item"
      v-for="banner in bannerList"
      :key="banner.img"
    >
      <van-image
        width="100%"
        height="100%"
        :src="banner.img"
        fit="cover"
        v-jumpTo="{url:banner.advUrl,type:3}"
      >
        <template v-slot:loading>
          <van-loading
            type="spinner"
            size="20"
          />
        </template>
      </van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
    name: "BannerSwiper",
    props: {
        bannerList: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const state = reactive({
            count: 0
        });

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.banner-swiper ::v-deep {
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        height: 180px;
        width: 343px;
    }
}
</style>