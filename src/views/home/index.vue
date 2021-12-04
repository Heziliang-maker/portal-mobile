<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <section class="banner">
    <BannerSwiper :banner-list="bannerList" />
  </section>
  <section class="new-week">
    <MainContainer @onClickMore="onClickMore">
      <template #title>
        New This Week
      </template>
      <template #content>
        <Grid
          class="grid"
          :rate='rate'
          :ccy='ccy'
          :grid-list="gridList"
          @update="updateGrid"
        />
      </template>
    </MainContainer>
  </section>

  <!-- 
  <better-scroll-view
    class="view"
    :scrollList="scrollList"
    targetClass="box"
  >
    <template #content="{item}">{{item.name}}</template>
  </better-scroll-view> -->
</template>


<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import BetterScrollView from "@/components/BetterScrollView";
import BannerSwiper from "./components/BannerSwiper.vue";
import MainContainer from "@/components/MainContainer";
import Grid from "@/components/Grid.vue";
export default {
    name: "Home",
    components: { BannerSwiper, BetterScrollView, MainContainer, Grid },
    setup() {
        const state = reactive({
            ccy: "$",
            rate: 1.2,
            scrollList: [],
            bannerList: [
                {
                    advUrl: "https://www.ecofimili.com/system/detail/176",
                    img: "http://buykop-ap.oss-ap-southeast-1.aliyuncs.com/images/2021-08-24/2/6714ae2c53b64098ad440846ba1603cd.png"
                },
                {
                    advUrl: "https://www.ecofimili.com/system/detail/395",
                    img: "http://buykop-ap.oss-ap-southeast-1.aliyuncs.com/images/2021-08-24/2/9a0411bd11ae4d23af9d2db70858d647.png"
                }
            ],
            gridList: [
                {
                    ccy: "USD",
                    classifyId: 4,
                    classifyName: "Home Partners",
                    id: 676,
                    productId: "108171121423",
                    productImg:
                        "http://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-08-17/103/4eccfd7231274546836626f64677407a.jpg",
                    productName: "Chanel Mademoiselle COCO Perfume (Spray)",
                    productSort: 5,
                    productUrl: "https://chanel.qa.buykop.com/system/detail/108171121423?buykopPortal=4",
                    reamt: 0,
                    retailPrice: 790,
                    shopId: "MGM1R2iQJ+IZnUwcIdn+yA==",
                    starLevel: null,
                    video: null,
                    videoCover: null,
                    isView: false
                },
                {
                    ccy: "USD",
                    classifyId: 6,
                    classifyName: "Jewelry",
                    id: 660,
                    productId: "1092912414269",
                    productImg:
                        "https://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-09-29/103/7ac837dca6ce494882327c0cb9a3053d.jpg",
                    productName: "iPhone 13 Pro Max 128GB",
                    productSort: 5,
                    productUrl: "https://apple.qa.buykop.com/system/detail/1092912414269?buykopPortal=4",
                    reamt: 0,
                    retailPrice: 8999,
                    shopId: "8yolLLaiogF3TcBZAdRy4w==",
                    starLevel: 4.8,
                    video: "https://buykop.oss-cn-shanghai.aliyuncs.com/video/2021-11-09/103/641ea3003e7f4194987186648ec2a40f.mp4",
                    videoCover:
                        "https://buykop.oss-cn-shanghai.aliyuncs.com/images/2021-11-09/103/3bb93e000b2f4eabb6ecc2d34b4c6cf0.jpg",
                    isView: false
                }
            ]
        });

        setTimeout(() => {
            state.scrollList = [{ name: "1" }, { name: "1" }, { name: "1" }];
        }, 2000);

        const updateGrid = (productUrl) => {
            const target = state.gridList.find((item) => item.productUrl === productUrl);
            target.isView = !target.isView;
        };

        const onClickMore = () => {
            console.log("=>", "onLickMore");
        };

        return {
            updateGrid,
            onClickMore,
            ...toRefs(state)
        };
    }
};
</script>



<style lang="scss" scoped>
.banner {
    width: 100%;
    padding: $container-padding;
    box-sizing: border-box;
    background-color: $container-bg2;
}
.new-week {
    .grid {
        margin-top: $grid-padding-h;
        margin-bottom: $grid-padding-h;
    }
}
</style>