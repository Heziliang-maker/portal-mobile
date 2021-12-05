<!--
 * @Date: 2021-12-05
 * @Description: 
-->
<template>
  <MainContainer @onClickMore="onClickMore">
    <template #title>
      New This Week
    </template>
    <template #content>
      <ProductsGrid
        class="grid"
        :grid-list="gridList"
      >
        <template #item="{item}">
          <ProductsGridItem :data-source="item" />
        </template>
      </ProductsGrid>
    </template>
  </MainContainer>
</template>

<script>
import { reactive, provide, toRefs } from "vue";
import { useStore } from "vuex";
import BetterScrollView from "@/components/BetterScrollView";

import MainContainer from "@/components/MainContainer";
import ProductsGrid from "@/components/ProductsGrid.vue";
import ProductsGridItem from "@/components/ProductsGridItem.vue";

export default {
    name: "ProductsGridSection",
    components: { BetterScrollView, MainContainer, ProductsGrid, ProductsGridItem },
    setup() {
        const state = reactive({
            scrollList: [
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

        const onClickMore = () => {
            console.log("=>", "onLickMore");
        };

        const updateGrid = (productUrl) => {
            console.log("=>", "update ..");
            const target = state.gridList.find((item) => item.productUrl === productUrl);
            target.isView = !target.isView;
        };

        provide("update", updateGrid);

        return {
            ...toRefs(state),
            onClickMore
        };
    }
};
</script>


<style lang="scss" scoped>
.grid {
    margin-top: $grid-padding-h;
    margin-bottom: $grid-padding-h;
}
</style>