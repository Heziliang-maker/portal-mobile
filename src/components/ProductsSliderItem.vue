<!--
 * @Date: 2021-12-05
 * @Description: ProductsSliderItem
-->
<template>
  <div
    class="slider-item"
    :class="itemClass"
    v-jumpTo="{url:dataSource.productUrl,type:2,id:dataSource.id,shopId:dataSource.shopId,
        detailQuery:{
          productId:dataSource.productId,
          shopId:dataSource.shopId
        }
        }"
  >
    <!-- 左侧 -->
    <section class="left">
      <div
        class="item-pic"
        :data-before-index="badgeStyle.index"
        :style="badgeStyle.styleVar"
      >
        <!-- 视频播放按钮 -->
        <!-- <iframe  src="@/assets/bofang.svg" width="30" height="30" frameborder="0"></iframe> -->
        <img
          v-show="!!dataSource.video && !dataSource.isView"
          class="item-pic-play"
          src="@/assets/images/global/bofang.png"
          alt="播放该视频"
          @click.stop="handleClickVideoPlayIcon(index,dataSource.productUrl)"
        >
        <div class="item-pic-col">
          <transition name="van-fade">
            <img
              v-show="love"
              src="@/assets/images/global/col-active.png"
              alt="心愿单"
            >
          </transition>
          <transition name="van-fade">
            <img
              v-show="!love"
              src="@/assets/images/global/col-inactive.png"
              alt="心愿单"
            >
          </transition>
        </div>
        <!-- <van-icon
              v-show="!!item.video && !isView"
              class="item-pic-play"
              name="play-circle-o"
              size="30"
              color="#f6f6f5"
              @click.stop.native="handleClickVideoPlayIcon(index)"
            /> -->
        <transition name="van-fade">
          <div
            class="item-pic-player"
            v-show="!!dataSource.video && dataSource.isView"
          >
            <!-- 视频 -->
            <video
              ref="videoPlayerRef"
              :src="dataSource.video"
              :poster="dataSource.videoCover"
              muted
              playsinline
              webkit-playsinline
              preload="auto"
            />
            <!-- 视频关闭icon -->
            <van-icon
              class="item-pic-player__close"
              size="14"
              name="cross"
              @click.stop.native="dataSource.isView = false"
            />
          </div>
        </transition>
        <van-image
          class="van-img"
          :src="dataSource.productImg"
          fit="cover"
          lazy-load
        >
          <template v-slot:loading>
            <van-loading
              type="spinner"
              size="20"
            />
          </template>
        </van-image>
        <!-- <img :src="item.productImg" alt=""> -->
      </div>
    </section>
    <!-- 右侧 -->
    <section class="right">

      <div class="item-price notranslate">
        <div class="current">
          <p
            class="current-price"
            v-html="$filter.priceGroup(dataSource.retailPrice)"
          ></p>
          <p
            class="local-price"
            v-if="rate&&rate!=1&&ccy!=='$'"
          >≈{{ccy}}
            {{(dataSource.retailPrice*rate).toFixed(2)}}</p>
          <div
            v-else
            class="gap"
          ></div>
        </div>
        <!-- <span>
              ${{item.retailPrice.toString().split('.')[0]}}<a>{{item.retailPrice.toString().split('.').length>1?item.retailPrice.toString().split('.')[1]:''}}</a>
            </span> -->
        <p
          class="origin"
          v-html="$filter.countFix(dataSource.reamt)"
        ></p>
      </div>
      <div
        class="item-name"
        v-html="dataSource.productName"
      >
      </div>
      <Score
        class="item-score"
        v-if="!!dataSource.starLevel"
        v-model="dataSource.starLevel"
        :size="14"
        readonly
      />
    </section>
  </div>
</template>

<script>
import { inject, computed, nextTick, ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import Score from "@/components/Score.vue";
import { UPDATE_LIST_ISVIEW_M } from "@/store/base/mutations";
export default {
    name: "ProductsSliderItem",
    components: { Score },
    // inject: ["seriesId"],
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
    setup(props, context) {
        const store = useStore();

        const videoPlayerRef = ref(null);

        const state = reactive({
            love: true
        });

        const update = inject("update");

        const handleClickVideoPlayIcon = async (index, productUrl) => {
            update(productUrl);

            await nextTick();

            const videoPlayer = videoPlayerRef.value;

            videoPlayer.play();

            videoPlayer.onended = () => {
                update(productUrl);
            };
        };

        return {
            videoPlayerRef,
            ccy: computed(() => store.state.ccy),
            rate: computed(() => store.state.rate),
            badgeStyle: computed(() => {
                return {
                    index: props.groupIndex * 3 + props.selfIndex,
                    styleVar: { "--before-background-color": ["#FC5443", "#FC9643"][props.selfIndex % 2] }
                };
            }),
            itemClass: computed(() => ({ type3: +props.groupIndex % 2 == 0 })),
            handleClickVideoPlayIcon,
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
$type2-img-width: 160px;
$type2-img-height: 160px;
$type3-img-width: 104px;
$type3-img-height: 104px;
$type2-section-left-width: 180px;
$type3-section-left-width: 116px;
$type2-pic-padding: 10px;
$type3-pic-padding: 6px;

.slider-item ::v-deep {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    section.left {
        width: $type2-section-left-width;
        margin-right: 8px;
    }
    section.right {
        width: 148px;
        margin-right: 8px;
    }

    .item-name {
        width: 100%;
        white-space: pre-wrap;
        @include font-n(13px, $word-color-2);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 19px;
        margin-bottom: 2px;
    }

    .item-score {
        // margin-bottom: 8px;
    }
    .item-pic {
        position: relative;
        width: 100%;
        background-color: $container-bg-2;
        overflow: hidden;
        // margin-bottom: 7px;
        padding: $type2-pic-padding;
        box-sizing: border-box;
        border-radius: $radius;
        display: flex;
        justify-content: center;

        &::before {
            content: attr(data-before-index);
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 28px;
            height: 28px;
            background-color: var(--before-background-color);
            border-radius: $radius;
            text-align: center;
            line-height: 27px;
            @include font-n(18px, $word-color-0);
            z-index: 2;
        }

        .van-img {
            width: $type2-img-width;
            height: $type2-img-height;
            border-radius: $radius;
            background-color: $container-bg-0;
        }

        .van-img > img {
            width: 100%;
            height: 100%;
        }
        .item-pic-col {
            position: absolute;
            right: 15%;
            top: 10%;
            z-index: 99;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            border-radius: 100%;
            background: $container-bg-0;
            border: 1px solid $border-color-3;
            img {
                height: 16px;
                height: 16px;
            }
        }
        .item-pic-play {
            position: absolute;
            width: fit-content;
            right: 10%;
            bottom: 10%;
            z-index: 99;
            width: 36px;
            height: 36px;
        }
        // 悬浮视频控件
        .item-pic-player {
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
                top: 15px;

                z-index: 99;
                color: $word-color-0;
            }
        }
    }
    .item-price {
        // margin-top: 6px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 2px;
        .current {
            .current-price {
                font-size: 18px;
                @include font-b();
                line-height: 24px;
            }

            .local-price {
                @include font-n();
                line-height: 18px;
            }
            .gap {
                height: $gutter-height;
            }
        }
        .origin {
            flex: 1;
            text-decoration: line-through;
            @include font-n(10px, #999999);
            margin-bottom: 2px;
        }
    }
}
.type3 ::v-deep {
    section.left {
        width: $type3-section-left-width;
        margin-right: 8px;
    }
    .item-pic {
        padding: $type3-pic-padding;
    }
    .van-img {
        width: $type3-img-width !important;
        height: $type3-img-height !important;
    }

    .van-img > img {
        width: 100%;
        height: 100%;
    }
}
</style>