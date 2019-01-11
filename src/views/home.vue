<template>
  <div class="home">
    <div class="header">
      <div class="morekind">
        <img src="../assets/images/feilei.png" alt="">
      </div>
      <router-link to="/search" class="search">
        <input type="search" placeholder="">
      </router-link>
      <div class="morekind">
        <img src="../assets/images/xiaoxi.png" alt="">
      </div>
    </div>
    <van-swipe :autoplay="3000" indicator-color="#f0b708">
      <van-swipe-item v-for="(img,index) in images" :key="index">
        <img class="ad_img" :src="img" />
      </van-swipe-item>
    </van-swipe>
    <homeNav></homeNav>
    <homeTabone></homeTabone>
    <navBottom></navBottom>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant'
  import navBottom from '@/components/navBottom'
  import homeNav from '@/views/homeNav'
  import homeTabone from '@/views/homeTabone/homeTabone'
  export default{
    components:{
      navBottom,
      homeNav,
      homeTabone,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
    },
    data(){
      return{
        active:0,
        images: [
          'http://www.17sucai.com/preview/1424582/2018-10-17/tt/picture/a1.png',
          'http://www.17sucai.com/preview/1424582/2018-10-17/tt/picture/a2.png',
          'http://www.17sucai.com/preview/1424582/2018-10-17/tt/picture/a3.png',
          'http://www.17sucai.com/preview/1424582/2018-10-17/tt/picture/a4.png'
        ]
      }
    }

  }
</script>

<style scoped>
  .header{
    width:100%;
    height:44px;
    position: fixed;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    z-index: 999;
  }
  .header .search{
    flex:1;
    height:30px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 30px;
    padding-left:30px;
    background-color:#fff;
    background-image: url('../assets/images/sousuo.png');
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position:10px 50%;
  }
  .header .search input{
    border:none;
  }
  .header .morekind{
    width:20px;
    height:20px;
    margin-left:12px;
    margin-right:12px;
  }
  .header .morekind img{
    width:20px;
    height: 20px;
  }
  .ad_img{
    width:100%;
    height:100%;
    display:block;
  }
  .home /deep/ .van-swipe__indicator{
    border-radius:7px;
    width:20px;
    height:3px;
  }
</style>
