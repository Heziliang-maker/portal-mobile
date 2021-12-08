<!--
 * @Date: 2021-12-08
 * @Description: Activity
-->
<template>
  <div class="activity">
    <div class="activity-wrapper">
      <van-icon
        size="22"
        color="#444"
        name="cross"
        @click="handleClickCloseIcon"
      />
      <div class="activity-main">
        <div
          class="main-1"
          v-show="step == '1'"
        >
          <div class="title">
            <p class="title1">Hey , friend ! </p>
            <p class="title2">We've got a gift for you ! Just Subscribe here !!!
              Limited to the top 20 everyday.</p>
          </div>
          <div class="main1-img">
            <img
              src="@/assets/images/global/global-activity-cake.webp"
              alt=""
            >
          </div>
          <div class="main1-field">
            <van-form @submit="handleSubscribe">
              <van-field
                v-model="email"
                label=""
                placeholder="Email Address"
              >
                <template #button>
                  <button
                    type="submit"
                    @click="handleSubscribe"
                  >Subscribe</button>
                </template>
              </van-field>
            </van-form>
          </div>
          <div
            class="main1-footer"
            @click="handleCancel"
          >Subscribe later</div>
        </div>
        <transition name="van-slide-right">
          <div
            class="main-2"
            v-show="step === '2'"
          >
            <div class="title">
              Successfully subscribed ~ !
            </div>
            <p class="info">You will receive special offers and the first
              opportunity to obtain new products!</p>
            <p class="info">Please leave a note about the gift you want on your
              order page.</p>
            <div class="list">
              <ul>
                <!-- 1 -->
                <li class="list-item">
                  <div class="list-item-main">
                    <img
                      src="@/assets/images/global/global-activity-gift1.webp"
                      alt=""
                    >
                  </div>
                  <div class="list-item-tag">Fishnet Bodystocking</div>
                </li>
                <li class="list-item">
                  <div class="list-item-main">
                    <img
                      src="@/assets/images/global/global-activity-gift2.webp"
                      alt=""
                    >
                  </div>
                  <div class="list-item-tag">Portable Fan</div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { _promote } from "@/api";
import { Toast } from "vant";
import { TOGGLE_ACTIVITY_VISIBILITY_M } from "@/store/base/mutations";
import { useStore } from "vuex";
import { useCheckEmailIsFill } from "@/utils/tools";
export default {
    setup() {
        const store = useStore();
        const state = reactive({
            email: "",
            step: "1"
        });

        const [isFill, value, setValue] = useCheckEmailIsFill();

        console.log("useCheckEmailIsFill()=>", useCheckEmailIsFill());

        // 读取step
        state.step = value;

        const handleSubscribe = async () => {
            if (state.email) {
                let res = await _promote.userSubscribe(state.email);
                if (res.status === "success") {
                    state.step = "2";
                    setValue("2");
                    console.log("useCheckEmailIsFill()=>", useCheckEmailIsFill());
                    Toast("Successfully subscribed");
                } else {
                    Toast(res.errorMsg);
                }
            } else {
                Toast("Fill in your email and subscribe");
            }
        };

        const handleClickCloseIcon = () => store.commit(TOGGLE_ACTIVITY_VISIBILITY_M, false);

        return {
            ...toRefs(state),
            handleSubscribe,
            handleClickCloseIcon
        };
    }
};
</script>

<style lang="scss" scoped>
.activity ::v-deep {
    // @include DEBUG;
    width: 100%;
    position: relative;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .activity-wrapper {
        width: calc(100% - 44px);

        // padding-top: 20px;
        margin: 0 auto;
        position: relative;

        .van-icon {
            position: absolute;
            top: 16px;
            right: 16px;
        }

        .activity-main {
            padding-top: 40px;
            background-color: $container-bg-0;
        }
    }

    .main-1 {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 0 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 22px;

        .title {
            margin-bottom: 14px;
            padding-left: 20px;
            .title1 {
                font-size: 14px;
                font-family: Montserrat-Regular, Montserrat;
                font-weight: 400;
                color: #333333;
                line-height: 26px;
            }
            .title2 {
                font-size: 12px;
                font-family: Montserrat-Light, Montserrat;
                font-weight: 300;
                color: #333333;
                line-height: 14px;
                word-break: keep-all;
            }
        }
        .main1-img {
            position: absolute;
            top: -90px;
            left: -30px;
            img {
                width: 208px;
                height: auto;
            }
        }
        .main1-field {
            width: 100%;
            margin-bottom: 16px;
            .van-cell {
                padding: 0;
            }
            .van-button {
                background-color: #162d75;
                font-size: 10px;
                font-family: Montserrat-Light, Montserrat;
                font-weight: 300;
                color: #ffffff;
            }

            .van-field__body {
                display: flex;
                align-items: center;
                height: 40px;
                border: 1px solid #d8d8d8;
                border-radius: 2px;
                box-sizing: border-box;
                input {
                    height: 100%;
                    margin-left: 10px;
                    font-size: 10px;
                    font-family: Montserrat-Light, Montserrat;
                    font-weight: 300;
                    color: #999999;
                    line-height: 39px;
                }
                .van-field__button {
                    box-sizing: border-box;
                    padding-left: 0;
                    height: 100%;
                    border-radius: 0px 2px 2px 0px;
                    button {
                        height: 100%;
                        width: 70px;
                        font-size: 10px;
                        font-family: Montserrat-Light, Montserrat;
                        font-weight: 300;
                        color: #ffffff;
                        border: none;
                        background: #162d75;
                        border-radius: 0px 2px 2px 0px;
                    }
                }

                //
            }
        }
        .main1-footer {
            text-align: center;
            color: #162d75;
            font-size: 12px;
            font-family: Montserrat-Light, Montserrat;
            font-weight: 300;
            color: #162d75;
            line-height: 15px;
        }
    }
    .main-2 {
        width: 100%;
        max-height: 380px;

        overflow: auto;
        box-sizing: border-box;
        padding: 0 28px 28px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .title {
            font-size: 14px;
            font-family: Montserrat-Regular, Montserrat;
            font-weight: 400;
            color: #333333;
            line-height: 26px;
            margin-bottom: 10px;
        }
        .info {
            font-size: 12px;
            font-family: Montserrat-Light, Montserrat;
            font-weight: 300;
            color: #333333;
            line-height: 14px;
            word-break: keep-all;
        }
        .list {
            width: 100%;
            box-sizing: border-box;
            padding-top: 30px;
            ul {
                width: 100%;
                padding-bottom: 3px;
                li.list-item {
                    margin: auto;
                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                    position: relative;
                    width: 180px;
                    border-radius: 1px;

                    border: 1px solid #f6236c;
                    box-sizing: border-box;
                    font-size: 0;
                    .list-item-main {
                        padding: 24px 17px 0;

                        img {
                            width: 100%;
                        }
                    }
                    .list-item-tag {
                        width: 100%;
                        height: 24px;
                        margin-top: 24px;
                        background-color: #f6236c;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 24px;
                        text-align: center;
                    }
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 52px;
                        height: 52px;
                        background-image: url("~@/assets/images/global/triangle.png");
                        background-size: 100% 100%;
                        background-position: 0 0;
                        top: 0;
                        right: 0;
                    }
                    &::before {
                        display: block;
                        position: absolute;
                        right: 2px;
                        top: 4px;
                        z-index: 9;
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 17px;
                    }
                }
                li.list-item:nth-of-type(1)::before {
                    content: "gift1";
                }
                li.list-item:nth-of-type(2)::before {
                    content: "gift2";
                }
            }
        }
    }
}
</style>