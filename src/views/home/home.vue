<template>
  <div id="home">
    <navBar>
      <div slot="center">购物街</div>
    </navBar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-views :recommend="recommends"></recommend-views>
    <feature-views></feature-views>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
    <p>6666</p>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/NavBar";
import homeSwiper from "@/views/home/childComps/homeSwiper";
import recommendViews from "@/views/home/childComps/recommendViews";
import featureViews from "@/views/home/childComps/featureView";
import tabControl from "@/components/content/tabControl/tabControl";

import { getHomeMultidata } from "@/network/home.js";

export default {
  name: "home",
  components: {
    navBar,
    homeSwiper,
    recommendViews,
    featureViews,
    tabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.nav-bar {
  position: fixed;
  z-index: 5555;
  left: 0;
  right: 0;
  top: 0;
}
#home {
  padding-top: 44px;
}
</style>
