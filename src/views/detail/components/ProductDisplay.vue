<!--
 * @Date: 2021-12-06
 * @Description: ProductDisplay
-->
<template>
  <div class="product">
    <!-- 商品大图 -->
    <div class="product-main">
      <div
        class="product-main-icon"
        v-if="!!dataSource.video && !isView"
      >
        <!-- 视频播放按钮 -->
        <img
          v-show="!!dataSource.video && !isView"
          src="@/assets/images/global/bofang.png"
          alt="播放该视频"
          @click.stop="handleClickVideoPlayIcon"
        >
      </div>
      <transition name="van-fade">
        <div
          class="product-main-player"
          v-show="!!dataSource.video && isView"
        >
          <!-- 视频 -->
          <video
            ref="videoRef"
            controls
            :src="dataSource.video"
            :poster="dataSource.videoCover"
            preload="auto"
            playsinline
            webkit-playsinline
          />
          <!-- @click="handleClickVideo" -->
          <!-- 视频关闭icon -->
          <van-icon
            class="product-main-player__close"
            size="14"
            name="cross"
            @click="handleClickVideoCloseIcon"
          />
        </div>
      </transition>
      <!-- 商品主图列表 -->
      <div class="product-main-swipe">
        <van-swipe
          indicator-color="white"
          ref="swiperRef"
          @change="onSwiperChange"
        >
          <van-swipe-item
            v-for="item in mainImages"
            :key="item.url"
          >
            <van-image
              fit="contain"
              :src="item.url"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 商品下部滚动列表 -->
    <div class="product-slide">
      <BetterScrollView
        key="slide"
        :scroll-list='dataSource.pics'
        targetClass="slide"
        columnKey="url"
      >
        <template #item="{item:slideItem,index}">
          <div
            class="product-slide__item"
            :class="{active:selectedKey==='slide' && curMainImageIndex===index}"
          >
            <van-image
              @click="changeImage(index)"
              width="100%"
              height="100%"
              fit="contain"
              :src="slideItem.url"
            />
          </div>
        </template>
      </BetterScrollView>
    </div>
    <!-- 商品名称 -->
    <div class="product-name">{{ dataSource.name }}</div>
    <!-- 商品评分 -->
    <div class="product-score">
      <Score
        v-show="!!dataSource.star"
        v-model="dataSource.star"
        :size="14"
        readonly
      />
    </div>
    <!-- 商品价格 -->
    <div class="product-price">
      <div class="product-price-wrapper">
        <div class="now-price">
          <span
            v-if="dataSource.retailPrice "
            class="now-price__store"
          >{{ dataSource.ccy + " " + dataSource.retailPrice}}</span>
        </div>
        <span
          class="origin-price"
          v-if="dataSource.originalPrice"
        >
          {{ dataSource.ccy  + " " + dataSource.originalPrice }}

        </span>
      </div>
    </div>
    <!-- gutter -->
    <div
      class="gutter"
      v-if="isColorExis"
    ></div>
    <!-- sku -->
    <div
      class="product-sku"
      v-if="isColorExis"
    >
      <div class="product-sku__title">Color</div>
      <div class="product-sku__wrapper">
        <BetterScrollView
          key="sku"
          :scroll-list='color'
          targetClass="box"
          columnKey="url"
        >
          <template #item="{item:colorItem,index}">
            <div
              class="product-sku__item"
              :class="{active:selectedKey==='sku' && curMainImageIndex===index}"
              @click="handleClickColor(colorItem,index)"
            >
              <!-- <van-image
                width="100%"
                height="100%"
                fit="cover"
                lazy-load
                :src="item.url"
              /> -->

              {{colorItem}}
            </div>
          </template>
        </BetterScrollView>
      </div>
    </div>
    <!-- gutter -->
    <div class="gutter"></div>
    <!-- brand info -->
    <div class="product-brand">
      <div class="product-brand__logo">
        <img
          :src="shopInfo.logoUrl"
          :alt="shopInfo.name"
        >
      </div>
      <div class="product-brand__info">
        <div class="name van-ellipsis">{{shopInfo.name}}</div>
        <div class="website van-ellipsis">{{shopInfo.domain}}</div>
      </div>
      <div class="product-brand__official">Brand Official Website</div>
    </div>
    <!-- gutter -->
    <div class="gutter"></div>
    <!-- ralated grids -->

  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, nextTick, onBeforeUnmount } from "vue";
import BScroll from "@better-scroll/core";
import Score from "@/components/Score";
import BetterScrollView from "@/components/BetterScrollView";

export default {
    name: "ProductDisplay",
    components: { Score, BetterScrollView },
    props: {
        dataSource: {
            type: Object,
            required: true
        },
        shopInfo: {
            type: Object,
            required: true
        }
    },
    setup(props, context) {
        const state = reactive({
            curMainImageIndex: 0,
            isView: false,
            mainImages: [],
            selectedKey: "slide" //slide sku
        });

        const videoRef = ref(null);
        const swiperRef = ref(null);

        const onSwiperChange = (index) => {
            state.curMainImageIndex = index;
            state.selectedKey = "slide";
        };

        // const images = computed(() => props.dataSource.pics);

        const changeImage = (index) => {
            if (state.isView) {
                videoPlayer.value.pause();
                state.isView = false;
            }

            // console.log("images.value=>", images.value);

            state.mainImages = props.dataSource.pics;

            state.curMainImageIndex = index;
            state.selectedKey = "slide";
            swiperRef.value.swipeTo(index);
        };

        const handleClickVideoPlayIcon = async () => {
            state.isView = true;
            await $nextTick();
            setTimeout(() => {
                videoRef.value.play();
            }, 300);

            videoRef.value.onended = () => {
                console.log("=>", "视频结束");
                videoRef.value.load();
                state.isView = false;
            };
        };

        const handleClickVideoCloseIcon = () => {
            state.isView = false;
        };

        const handleClickVideo = () => {
            const paused = videoRef.value.paused;
            if (paused) {
                videoRef.value.play();
            } else {
                videoRef.value.pause();
            }
        };

        const getColorSkuImg = (color) => {
            const sku = props.dataSource.sku.filter((skuItem) => skuItem.sp.color === color && skuItem.pic);
            console.log("sku=>", sku);
            if (sku.length > 0) {
                return sku[0].pic;
            }
            return props.dataSource.pics[0].url;
        };

        const handleClickColor = (color, index) => {
            const pic = getColorSkuImg(color);
            state.mainImages = [{ url: pic }];
            state.selectedKey = "sku";
            state.curMainImageIndex = index;
        };

        onBeforeUnmount(() => {
            state.bs.destroy();
        });

        const isColorExis = computed(() => {
            if (props.dataSource.attrs && props.dataSource.attrs.color) {
                return props.dataSource.attrs.color.length > 0;
            }
            return false;
        });
        const color = computed(() => {
            if (props.dataSource.attrs && props.dataSource.attrs.color) {
                return props.dataSource.attrs.color;
            }
            return [];
        });

        watch(
            () => props.dataSource,
            async (newValue, oldValue) => {
                console.log("=>", "watch..");
                state.mainImages = props.dataSource.pics;
                await nextTick();
            },
            { immediate: true }
        );

        return {
            videoRef,
            swiperRef,
            ...toRefs(state),
            color,
            isColorExis,
            onSwiperChange,
            changeImage,
            handleClickVideoPlayIcon,
            handleClickVideoCloseIcon,
            handleClickVideo,
            handleClickColor
        };
    }
};
</script>


<style lang="scss" scoped>
.product ::v-deep {
    display: flex;
    flex-direction: column;
    align-items: center;

    .product-main {
        margin-bottom: 8px;
        position: relative;
        // 悬浮视频播放按钮
        .product-main-icon {
            position: absolute;
            width: fit-content;
            left: 50%;
            transform: translateX(-50%);
            bottom: 10%;
            z-index: 99;
            > img {
                width: 46px;
                height: 46px;
            }
        }
        .product-main-swipe {
            width: 375px;
            .van-image {
                width: 375px;
                height: 375px;
            }
        }

        // 悬浮视频控件
        .product-main-player {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            // background-color: red;
            z-index: 99;
            // 播放icon
            > video {
                width: 100%;
                height: 100%;
                background-color: #000;
                object-fit: contain;
                // height: 100vh;
            }

            &__close {
                position: absolute;
                // topposition: absolute;
                right: 15px;
                top: 30px;
                z-index: 99;
                color: #fff;
            }
        }
    }
    .product-slide {
        width: 100%;
        box-sizing: border-box;

        .product-slide__item {
            border: 1px solid $theme-color;
            padding: 1px;
            border-radius: 4px;
        }
        .slide {
            margin-right: 8px;
        }
        .slide:first-of-type {
            margin-left: 0;
        }

        .product-slide__item {
            width: 56px;
            height: 56px;
            box-sizing: border-box;
            border: 1px solid transparent;
            padding: 1px;
            border-radius: 4px;
        }
        .product-slide__item.active {
            border-color: $theme-color;
        }
    }
    .product-name {
        margin-bottom: 2px;
        @include font-b(18px);
        padding: 0 $container-padding;
        line-height: 27px;
        align-self: flex-start;
    }
    .product-score {
        padding: 0 $container-padding;
        align-self: flex-start;
    }
    .product-price {
        width: 100%;
        margin: 9px 0 25px;
        padding: 0 $container-padding;
        align-self: flex-start;
        box-sizing: border-box;

        .product-price-wrapper {
            width: 100%;
            box-sizing: border-box;
            padding: 5px $container-padding;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-top: 1px dashed #d5d0bf;
            border-bottom: 1px dashed #d5d0bf;
            background-color: #f5f3ed;
        }
        // margin-bottom: 30px;
        .now-price {
            margin-right: 17px;
            position: relative;

            &::after {
                content: "";
                display: block;
                height: 20px;
                width: 1px;
                background-color: $container-bg-4;
                transform: scaleX(0.5);
                position: absolute;
                right: -8px;
                top: 50%;
                transform: translateY(-50%);
            }
            font-size: 0;
            .now-price__store {
                @include font-b(20px);
                line-height: 29px;
            }
            .now-price__local {
                font-size: 12px;
                font-weight: 300;
                color: #111111;
                line-height: 15px;
            }
        }
        .origin-price {
            @include font-n(12px, $word-color-3);
            text-decoration: line-through;
        }
    }
    .product-sku {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: flex-start;
        align-items: center;
        padding: $container-padding;

        $title-width: 45px;
        $gap: $container-padding;

        .container-wrapper {
            font-size: 0;

            .box {
                margin-right: $container-padding;
            }
            .box:first-of-type {
                margin-left: 0;
            }

            .box:last-of-type {
                margin-right: 0;
            }
        }

        .product-sku__title {
            width: $title-width;
            @include font-n();
        }
        .product-sku__wrapper {
            width: calc(100% - #{$title-width} - #{$gap});
        }

        .product-sku__item {
            @include font-b(14px);
            line-height: 20px;
            padding: 6px 8px;
            border: 1px solid #e9e8e8;
            border-radius: $radius;
        }
        .product-sku__item.active {
            border-color: $theme-color;
            color: $theme-color;
        }
    }
    .product-brand {
        background-image: url("~@/assets/images/page-detail/page-detail-brandbg.png");
        background-position: 15% center;
        background-repeat: no-repeat;

        width: 100%;

        padding: $container-padding;
        box-sizing: border-box;
        position: relative;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        .product-brand__logo {
            width: 48px;
            height: 48px;
            background: $container-bg-0;
            margin-right: $container-padding;
            border: 1px solid $border-color-4;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .product-brand__info {
            .name {
                @include font-b(16px, $word-color-5);
                line-height: 24px;
                max-width: 140px;
            }
            .website {
                @include font-n(12px, $word-color-2);
                line-height: 18px;
                max-width: 300px;
            }
        }
        .product-brand__official {
            position: absolute;
            top: $container-padding;
            right: $container-padding;
            border-radius: $radius;
            background-color: #fffcef;
            border: 1px solid #f9d059;
            padding: 3px 8px;
            @include font-n(12px, #542e02);
        }
    }
}
</style>