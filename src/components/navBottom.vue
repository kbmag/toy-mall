<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <img slot="icon" slot-scope="props"
             :src="props.active ? icon.active1 : icon.normal1">
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <img slot="icon" slot-scope="props"
             :src="props.active ? icon.active2 : icon.normal2">
        <span>找玩具</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <img slot="icon" slot-scope="props"
             :src="props.active ? icon.active3 : icon.normal3">
        <span>头条</span>
      </van-tabbar-item>
      <van-tabbar-item to="/login">
        <img slot="icon" slot-scope="props"
             :src="props.active ? icon.active4 : icon.normal4">
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Tabbar,TabbarItem} from "vant"
  export default {
    data(){
      return{
        active:0,
        icon:{
          normal1:require('../assets/images/shouye.png'),
          active1:require('../assets/images/shouye-xuanzhong.png'),
          normal2:require('../assets/images/zhaowanju.png'),
          active2:require('../assets/images/zhaowanju-xuanzhong.png'),
          normal3:require('../assets/images/toutiao.png'),
          active3:require('../assets/images/toutiao--xuanzhong.png'),
          normal4:require('../assets/images/wode.png'),
          active4:require('../assets/images/wode-xuanzhong.png'),
        }
      };
    },
    components: {
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
    },
  }
</script>

<style scoped>
  .van-tabbar-item span{
    color:#959595;
  }
  .van-tabbar-item--active span{
    color: #0094fb;
  }
</style>
