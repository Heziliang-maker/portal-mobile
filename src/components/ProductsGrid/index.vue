<!--
 * @Date: 2021-12-05
 * @Description: ProductsGrid
-->
<template>
  <Grid v-bind="$attrs">
    <template #item="{item}">
      <GridItem :data-source="item" />
    </template>
  </Grid>
</template>

<script>
import { reactive, toRefs } from "vue";
import Grid from "@/components/Grid";
import GridItem from "@/components/Grid";
export default {
    name: "ProductsGrid",
    components:{Grid,GridItem}
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