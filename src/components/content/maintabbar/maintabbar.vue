<template>
  <tabbar>
    <tabbaritem path="/home">
      <div slot="item-text">首页</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </div>
      <div slot="item-activeicon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </div>
    </tabbaritem>
    <tabbaritem path="/category">
      <div slot="item-text">分类</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </div>
      <div slot="item-activeicon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <div slot="item-text">购物车</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/cart.svg" alt="" />
      </div>
      <div slot="item-activeicon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" />
      </div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <div slot="item-text">我的</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </div>
      <div slot="item-activeicon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar.vue";
import tabbaritem from "@/components/common/tabbar/tabbar-item.vue";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style></style>
