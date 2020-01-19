<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
import mainTabbar from "@/components/content/maintabbar/maintabbar";
export default {
  name: "app",
  components: {
    mainTabbar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
