<template>
  <div class="tabControl">
    <div
      class="tabControl-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabContral",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 14px;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.tabControl-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active {
  color: var(--color-tint);
}
</style>
