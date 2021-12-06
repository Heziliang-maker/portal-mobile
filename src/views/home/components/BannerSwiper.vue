<!--
 * @Date: 2021-12-04
 * @Description: Banner Swiper
-->
<template>
  <van-swipe
    :autoplay="1000"
    class="banner-swiper"
  >
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
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "BannerSwiper",
    setup() {
        const store = useStore();

        return {
            bannerList: computed(() => store.state.bannerList)
        };
    }
};
</script>

<style lang="scss" scoped>
.banner-swiper ::v-deep {
    .van-swipe-item {
        height: 180px;
        width: 345px;
    }
}
</style>