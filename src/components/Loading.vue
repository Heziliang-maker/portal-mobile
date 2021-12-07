<!--
 * @Date: 2021-12-07
 * @Description: 
-->
<template>
  <div class="loading">
    <van-loading
      size="40"
      :color="variables.loadingColor"
    />
  </div>
</template>


<script>
import { computed } from "vue";
import variables from "@/styles/variables.scss";
export default {
    setup() {
        return {
            variables: computed(() => variables)
        };
    }
};
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" scoped>
.loading {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>