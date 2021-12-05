<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <section class="banner">
    <BannerSwiper :banner-list="bannerList" />
  </section>
  <!-- new-week -->
  <section class="new-week">
    <ProductsGridSection />
  </section>

  <!-- Popular Products At -->

  <!-- hot-new -->
  <section class="hot-new">
    <ProductsSliderSection />
  </section>
  <!-- gutter -->
  <div class="gutter"></div>
  <!-- Shop By Categories -->
  <section class="shop-categories">
    <CategoriesSection />
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
import { reactive, provide, toRefs } from "vue";
import BannerSwiper from "./components/BannerSwiper";
import ProductsGridSection from "./components/ProductsGridSection.vue";
import ProductsSliderSection from "./components/ProductsSliderSection.vue";
import CategoriesSection from "./components/CategoriesSection.vue";
export default {
    name: "Home",
    components: { BannerSwiper, ProductsGridSection, ProductsSliderSection, CategoriesSection },
    setup() {
        const state = reactive({
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

        return {
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
    background-color: $container-bg-2;
}
.new-week {
    margin-top: $grid-padding-h;
}
.hot-new {
    margin-top: $grid-padding-h;
}
.shop-categories {
    margin-top: $grid-padding-h;
}
</style>