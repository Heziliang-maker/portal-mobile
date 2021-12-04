<!--
 * @Date: 2021-12-03
 * @Description: 
-->
<template>
  <div class="footer">
    <div class="gap"></div>
    <div class="footer-info">
      <!-- 1 -->
      <div class="footer-info-item">
        <div class="item-pic">
          <img
            src="@/assets/images/layout-footer/info-1.png"
            alt=""
          >
        </div>
        <div class="item-main">
          <div class="item-main__title">Safe Payment</div>
          <div class="item-main__content">Use a secure payment</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="footer-info-item">
        <div class="item-pic">
          <img
            src="@/assets/images/layout-footer/info-2.png"
            alt=""
          >
        </div>
        <div class="item-main">
          <div class="item-main__title">Safe Payment</div>
          <div class="item-main__content">Use a secure payment</div>
        </div>
      </div>
      <!-- 3 -->
      <div class="footer-info-item">
        <div class="item-pic">
          <img
            src="@/assets/images/layout-footer/info-3.png"
            alt=""
          >
        </div>
        <div class="item-main">
          <div class="item-main__title">Global Delivery</div>
          <div class="item-main__content">Covering more than 200 countries and
            regions</div>
        </div>
      </div>
      <!-- 4 -->
      <div class="footer-info-item">
        <div class="item-pic">
          <img
            src="@/assets/images/layout-footer/info-4.png"
            alt=""
          >
        </div>
        <div class="item-main">
          <div class="item-main__title">Low Price Guarantee</div>
          <div class="item-main__content">Reduce intermediate</div>
        </div>
      </div>
      <!-- 5 -->
      <div class="footer-info-item">
        <div class="item-pic">
          <img
            src="@/assets/images/layout-footer/info-5.png"
            alt=""
          >
        </div>
        <div class="item-main">
          <div class="item-main__title">International Brand</div>
          <div class="item-main__content">Guarantee authentici</div>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="footer-collapse">
      <van-collapse
        v-model="activeNames"
        :border="false"
      >
        <van-collapse-item
          ref="collapse"
          v-for=" (item,index) in collTextList"
          :key="item.title"
          :title="item.title"
          :name="index"
        >
          <p
            v-for="sitem in item.content"
            :key="item.label"
            @click="handleClickFoot(sitem.path)"
          >{{sitem.label}}</p>

        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="footer-payinfo">
      <div class="title">Payment Options</div>
      <div class="content">
        <img
          src="@/assets/images/layout-footer/pay-1.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-2.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-3.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-4.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-5.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-6.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/layout-footer/pay-7.png"
          alt="visa支付"
        >
      </div>
    </div>
    <div class="footer-copyright">
      <p>
        © 2021 I Midnight Sad Rose Limited I All Rights Reserved I Be a
        visionary I Powered by Buykop
      </p>
    </div>
    <div class="footer-link">
      <a
        class="footer-bot__link"
        href="https://beian.miit.gov.cn/#/Integrated/index"
      >沪ICP备2020033164号-2</a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const collTextList = [
            {
                title: "Law and Compliance",
                content: [
                    {
                        label: "Terms of Service",
                        path: "/terms"
                    },
                    {
                        label: "Privacy Policy",
                        path: "/privacy"
                    }
                ]
            },
            {
                title: "Formularay",
                content: [
                    {
                        label: "About Us",
                        path: "/about"
                    }
                ]
            },
            {
                title: "Contact Us",
                content: [
                    {
                        label: "Tel：+6596810788"
                    },
                    {
                        label: "E-mail：service@buykop.com"
                    }
                ]
            }
        ];

        const router = useRouter();

        const state = reactive({
            collTextList,
            activeNames: ["1"]
        });

        const handleClickFoot = (path) => {
            if (path) {
                router.push(path);
                state.activeNames = [];
            }
        };

        return { handleClickFoot, ...toRefs(state) };
    }
};
</script>

<style lang="scss" scoped>
.footer ::v-deep {
    background: $footer-bg;
    margin-top: 8px;
    width: 100%;
    // 信息
    .footer-info {
        padding: 24px $container-padding;
        background-color: $container-bg-0;
        .footer-info-item {
            margin: 24px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .item-pic {
                flex: 0 0 38px;
                margin-right: 17px;

                img {
                    width: 100%;
                    height: auto;
                }
            }
            .item-main {
                .item-main__title {
                    @include font-b(14px, #1d1d1d);
                    line-height: 20px;
                }
                .item-main__content {
                    @include font-n(12px, #1d1d1d);
                    line-height: 18px;
                }
            }
        }
        .footer-info-item:first-of-type {
            margin-top: 0;
        }
        .footer-info-item:last-of-type {
            margin-bottom: 0;
        }
    }
    // 折叠面板
    .footer-collapse {
        .van-collapse {
            .van-cell {
                background: $footer-bg;
                .van-cell__title {
                    @include font-b(14px);
                    line-height: 20px;
                    background: $footer-bg;
                }
                .van-cell__right-icon {
                    color: $icon-color-1;
                }
            }
            .van-collapse-item__content {
                padding-top: 17px;
                padding-bottom: 17px;
                p {
                    @include font-n(14px);
                    line-height: 20px;
                }
                & > p:first-of-type {
                    margin-bottom: $container-padding;
                }
                & > p:last-of-type {
                    margin-bottom: 0;
                }
            }
            .van-cell::after {
                border-bottom: 1px solid $border-color-2;
            }
            .van-collapse-item--border::after {
                border-top: 1px solid $border-color-2;
            }
        }
    }
    .footer-payinfo {
        background: $footer-bg;
        padding: 12px $container-padding 24px;
        border-top: 1px solid $border-color-2;
        .title {
            @include font-b(14px);
            line-height: 20px;
            margin-bottom: 16px;
        }
        .content {
            img {
                width: 42px;
                margin-right: 6px;
            }
        }
    }
    .footer-copyright {
        padding: 10px $container-padding;
        @include font-n(12px, $word-color-3);
        background-color: $container-bg-0;
        text-align: center;
    }
    .footer-link {
        padding-bottom: 20px;
        background-color: $container-bg-0;
        text-align: center;
        a {
            word-break: keep-all;
            text-align: center;
            @include font-n(12px, $word-color-3);
        }
    }
}
</style>