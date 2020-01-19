<template>
  <div class="tabbar-item" @click="itemclick()">
    <slot v-if="isActive" name="item-activeicon"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar-item",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "pink"
    }
  },
  data() {
    return {
      // isActive:false
    };
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      // console.log(this.$route.path);

      return this.$route.path.indexOf(this.path) != -1;
    },
    activestyle() {
      return this.isActive ? { color: this.activecolor } : {};
    }
  }
};
</script>

<style>
.bar-item {
  flex: 1;
  height: 49px;
}
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
}
.tabbar-item img {
  vertical-align: top;
  height: 24px;
  width: 24px;
  margin-top: 3px;
}
</style>
