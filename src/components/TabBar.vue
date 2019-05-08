<template>
  <div class="tab-bar">
    <van-tabbar>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="point-gift-o" to="/activity">活动</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/person">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {menuRouters} from "@/router"

  export default {
    name: "TabBar",

    components: {},

    data() {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tab-bar {

  }
</style>
