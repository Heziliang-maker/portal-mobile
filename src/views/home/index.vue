<!--
 * @Date: 2021-12-03
 * @Description: views/home 首页
-->

<template>
  <div>
    Home
  </div>
  <p>BetterScorllView</p>
  <BetterScrollView />
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
            count: 0
        });

        return {
            ...toRefs(state)
        };
    }
};
</script>



<style lang="scss" scoped>
</style>