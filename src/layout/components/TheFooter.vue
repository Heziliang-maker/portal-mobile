<!--
 * @Date: 2021-12-03
 * @Description: 
-->
<template>
  <div class="footer">
    <div class="footer-top">
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
    <div class="footer-bot">
      <div
        class="footer-bot-logo"
        @click="$router.push('/home')"
      >
        <img
          src="@/assets/images/footer-logo.webp"
          alt=""
        >
      </div>
      <p class="footer-bot-copyright">
        © 2021 I Midnight Sad Rose Limited All Rights Reserved I Be a visionary
        I Powered by Buykop
      </p>
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2020033164号-2</a>
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
    background: $theme-color;
    margin-top: 20px;
    width: 100%;
    .footer-top {
        .van-collapse {
            .van-cell {
                background: $theme-color;
                .van-cell__title {
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #ffffff;
                    background: $theme-color;
                }
                .van-cell__right-icon {
                    color: #ffffff;
                }
            }
            .van-collapse-item__content {
                padding-top: 17px;
                padding-bottom: 17px;
                background: $theme-color;
                p {
                    font-size: 10px;
                    line-height: 17px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #ffffff;
                }
                & > p:first-of-type {
                    margin-bottom: 10px;
                }
            }
            .van-cell::after {
                // background: #162d75;
                border-bottom: 1px solid $border-color1;
            }
            .van-collapse-item--border::after {
                border-top: 1px solid $border-color1;
            }
        }
    }
    .footer-bot {
        width: calc(100% - 32px);
        box-sizing: border-box;
        padding: 27px 0 42px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid #344c97;

        &-logo {
            height: 30px;
            margin-bottom: 10px;
            img {
                height: 100%;
            }
        }
        &-copyright,
        a {
            word-break: keep-all;
            width: 255px;
            text-align: center;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 18px;
        }
    }
}
</style>