<!--
 * @Date: 2021-12-03
 * @Description: views/more 查看更多
-->
<template>
  <div>
    Detail
  </div>
</template>



<script>
import { reactive, toRefs } from "vue";

export default {
    name: "Detail",
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