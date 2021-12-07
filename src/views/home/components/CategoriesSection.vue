<!--
 * @Date: 2021-12-05
 * @Description: CategoriesSection
-->
<template>
  <MainContainer
    :showFooter="false"
    class="maincontainer"
  >
    <template #title>
      Shop By Categories
    </template>
    <template #content>
      <BetterScrollView
        key="category"
        :scrollList="categoriesList"
        targetClass="category"
        columnKey="name"
      >
        <template #item="{item,index}">
          <CategoryIem
            :selfIndex="1"
            :group-index="index"
            :data-source="item[0]"
          />
          <CategoryIem
            :selfIndex="2"
            :group-index="index"
            :data-source="item[1]"
          />
        </template>
      </BetterScrollView>
    </template>
  </MainContainer>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import BetterScrollView from "@/components/BetterScrollView";

import MainContainer from "@/components/MainContainer";
import CategoryIem from "./CategoryIem.vue";
export default {
    name: "CategoriesSection",
    components: { CategoryIem, BetterScrollView, MainContainer },
    setup() {
        const store = useStore();

        return {
            categoriesList: computed(() => store.state.categoriesList)
        };
    }
};
</script>

<style lang="scss" scoped>
.category {
    margin-right: 10px;
    margin-bottom: 10px;

    .category:first-of-type {
        margin-bottom: 22px;
    }
}
</style>