<template>
  <div id="home">
    <navBar>
      <div slot="center">购物街</div>
    </navBar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-views :recommend="recommends"></recommend-views>
    <feature-views></feature-views>
    <tab-control :titles="['流行', '新款', '精选a']"></tab-control>
    <goods-List :goods="this.goods['pop'].list"></goods-List>
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
import goodsList from "@/components/content/goods/goodsList";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  components: {
    navBar,
    homeSwiper,
    recommendViews,
    featureViews,
    tabControl,
    goodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        // for(n of res.data.list){
        //   this.goods[type].list.push(n);
        // }
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
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
