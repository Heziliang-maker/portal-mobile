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
      <div class="grid-list-item">
        <div class="item-pic">
          <!-- 视频播放按钮 -->
          <!-- <iframe  src="@/assets/bofang.svg" width="30" height="30" frameborder="0"></iframe> -->
          <img
            v-show="!!item.video && !item.isView"
            class="item-pic-play"
            src="@/assets/images/bofang.png"
            alt="播放该视频"
            @click.stop="handleClickVideoPlayIcon(index,item.productUrl)"
          >
          <div class="item-pic-col">
            <transition name="van-fade">
              <img
                v-show="love"
                src="@/assets/images/col-active.png"
                alt="心愿单"
              >
            </transition>
            <transition name="van-fade">
              <img
                v-show="!love"
                src="@/assets/images/col-inactive.png"
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
              v-show="!!item.video && item.isView"
            >
              <!-- 视频 -->
              <video
                :ref="setItemRef"
                :src="item.video"
                :poster="item.videoCover"
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
                @click.stop.native="item.isView = false"
              />
            </div>
          </transition>
          <van-image
            class="van-img"
            :width="158"
            :height="158"
            :src="item.productImg"
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
        <div class="item-price notranslate">
          <div class="current">
            <p
              class="current-price"
              v-html="$filter.priceGroup(item.retailPrice)"
            ></p>
            <p
              class="local-price"
              v-if="rate&&rate!=1&&ccy!=='$'"
            >≈{{ccy}}
              {{(item.retailPrice*rate).toFixed(2)}}</p>
            <div
              v-else
              class="item-gap"
            ></div>
          </div>
          <!-- <span>
              ${{item.retailPrice.toString().split('.')[0]}}<a>{{item.retailPrice.toString().split('.').length>1?item.retailPrice.toString().split('.')[1]:''}}</a>
            </span> -->
          <p
            class="origin"
            v-html="$filter.countFix(item.reamt)"
          ></p>
        </div>
        <div
          class="item-name"
          v-html="item.productName"
        >
        </div>
        <Score
          class="item-score"
          v-if="!!item.starLevel"
          v-model="item.starLevel"
          :size="14"
          readonly
        />

      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { onBeforeUpdate, onUpdated, nextTick, reactive, toRefs } from "vue";
import Score from "@/components/Score.vue";
export default {
    name: "Grid",
    emits: ["update"],
    components: { Score },
    props: {
        gridList: {
            type: Array,
            default: () => []
        },
        ccy: String,
        rate: String | Number
    },
    setup(props, { emit }) {
        const state = reactive({
            itemRefs: [],
            love: false
        });

        const setItemRef = (el) => {
            state.itemRefs.push(el);
        };

        const handleClickVideoPlayIcon = async (index, productUrl) => {
            emit("update", productUrl);
            await nextTick();

            const videoPlayer = state.itemRefs[index];

            videoPlayer.play();
            videoPlayer.onended = () => {
                emit("update", productUrl);
            };
        };

        onBeforeUpdate(() => {
            state.itemRefs = [];
        });
        onUpdated(() => {
            console.log("itemRefs=>", state.itemRefs);
        });

        return {
            setItemRef,
            handleClickVideoPlayIcon,
            ...toRefs(state)
        };
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
        .item-pic {
            background-color: $container-bg3;
            overflow: hidden;
            margin-bottom: 7px;
            padding: 8px;
            box-sizing: border-box;
            width: 100%;
            .van-img {
                border-radius: $radius;
            }

            .van-img > img {
                width: 100%;
                height: 100%;
            }
        }
        .item-name {
            flex: 0 0 158px;
            box-sizing: border-box;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 17px;
            margin-bottom: 2px;
        }
        .item-gap {
            height: 6px;
        }
        .item-score {
            // margin-bottom: 8px;
        }
        .item-pic {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
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
                background: #ffffff;
                border: 1px solid #e3e3e3;
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
                    color: #fff;
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
            }
            .origin {
                flex: 1;
                text-decoration: line-through;
                @include font-n(10px, #999999);
                margin-bottom: 2px;
            }
        }
    }
}
</style>