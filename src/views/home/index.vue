<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <div>
    Home
  </div>
  <p>BetterScorllView</p>
  <better-scroll-view
    class="view"
    :scrollList="scrollList"
    targetClass="box"
  >
    <template #content="{item}">{{item.name}}</template>
  </better-scroll-view>
  <router-link to="/detail">去往Detail</router-link>
</template>


<script>
import { reactive, toRefs } from "vue";
import BetterScrollView from "@/components/BetterScrollView";
export default {
    name: "Home",
    components: {
        BetterScrollView
    },
    setup() {
        const state = reactive({
            scrollList: []
        });
        setTimeout(() => {
            state.scrollList = [{ name: "1" }, { name: "1" }, { name: "1" }];
        }, 2000);

        return {
            ...toRefs(state)
        };
    }
};
</script>



<style lang="scss" scoped>
.view ::v-deep .box {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>