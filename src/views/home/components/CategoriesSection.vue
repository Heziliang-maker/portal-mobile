<!--
 * @Date: 2021-12-05
 * @Description: CategoriesSection
-->
<template>
  <MainContainer class="maincontainer">
    <template #title>
      Shop By Categories
    </template>
    <template #content>
      <BetterScrollView
        :scrollList="scrollList"
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
import { reactive, toRefs } from "vue";
import BetterScrollView from "@/components/BetterScrollView";

import MainContainer from "@/components/MainContainer";
import CategoryIem from "./CategoryIem.vue";
export default {
    name: "CategoriesSection",
    components: { CategoryIem, BetterScrollView, MainContainer },
    setup() {
        const state = reactive({
            scrollList: []
        });

        setTimeout(() => {
            state.scrollList = [
                [
                    {
                        id: 1,
                        name: "Clothing＆ Accessorie"
                    },
                    {
                        id: 2,
                        name: "Child"
                    }
                ],
                [
                    {
                        id: 3,
                        name: "Electronic Digital"
                    },
                    {
                        id: 4,
                        name: "Car Parts"
                    }
                ],
                [
                    {
                        id: 5,
                        name: "Outdoor＆ Garden"
                    },
                    {
                        id: 6,
                        name: "Festival＆ Gifts"
                    }
                ],
                [
                    {
                        id: 7,
                        name: "Home Partners"
                    },
                    {
                        id: 8,
                        name: "Work＆ Study"
                    }
                ],
                [
                    {
                        id: 9,
                        name: "Personal Care"
                    },
                    {
                        id: 10,
                        name: "Sporting Goods"
                    }
                ]
            ];
        }, 600);

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style lang="scss" scoped>
.category {
    margin-right: 10px;

    .category:first-of-type {
        margin-bottom: 22px;
    }
}
</style>