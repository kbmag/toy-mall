<template>
  <div class="home_nav">
    <router-link class="home_nav_li" to="" tag="li">
      <img src="../assets/images/yaokongdiandong.png" alt="">
      <span>遥控电动</span>
    </router-link>
    <router-link class="home_nav_li" to="" tag="li">
      <img src="../assets/images/yingyouyizhi.png" alt="">
      <span>婴幼益智</span>
    </router-link>
    <router-link class="home_nav_li" to="" tag="li">
      <img src="../assets/images/guanxingwanju.png" alt="">
      <span>惯性玩具</span>
    </router-link>
    <router-link class="home_nav_li" to="" tag="li">
      <img src="../assets/images/dongmanwanju.png" alt="">
      <span>动漫体育</span>
    </router-link>
    <router-link class="home_nav_li" to="" tag="li">
      <img src="../assets/images/gengduoyouhui.png" alt="">
      <span>更多优惠</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "homeNav"
    }
</script>

<style scoped>
  .home_nav{
    display: flex;
    padding:13px 0;
    background:#fff;
    margin-bottom:10px;
  }
  .home_nav .home_nav_li{
    flex: 1;
    text-align: center;
  }
  .home_nav .home_nav_li span{
    display: block;
    margin-top:7px;
    color: #333;
  }
</style>
