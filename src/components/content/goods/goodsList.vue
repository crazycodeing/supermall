<template>
  <div class="goods">
    {{ goods }}
  </div>
</template>

<script>
import goodsLlistItem from "@/components/content/goods/goodsListItem";
export default {
  name: "goodsLlist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
