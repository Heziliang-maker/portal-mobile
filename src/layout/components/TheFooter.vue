<!--
 * @Date: 2021-12-03
 * @Description: 
-->
<template>
  <div class="footer">
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
          src="@/assets/images/pay-1.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-2.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-3.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-4.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-5.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-6.png"
          alt="visa支付"
        >
        <img
          src="@/assets/images/pay-7.png"
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
                    color: $icon-color-gray;
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
        @include font-n(12px, #999999);
        background-color: #fff;
        text-align: center;
    }
    .footer-link {
        padding-bottom: 20px;
        background-color: #fff;
        text-align: center;
        a {
            word-break: keep-all;
            text-align: center;
            @include font-n(12px, #999999);
        }
    }
}
</style>