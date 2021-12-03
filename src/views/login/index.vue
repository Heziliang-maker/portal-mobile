<!--
 * @Date: 2021-12-03
 * @Description: views/login 登录
-->
<template>
  <div>
    Login
  </div>
</template>


<script>
import { reactive, toRefs } from "vue";

export default {
    name: "Login",
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