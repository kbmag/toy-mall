<template>
  <div class="my_tab_one">
    <van-tabs>
      <van-tab>
        <div slot="title">玩具朋友圈</div>
        <homeTabfirst></homeTabfirst>
      </van-tab>
      <van-tab>
        <div slot="title">关注</div>
        <div>0.0.2</div>
      </van-tab>
      <van-tab>
        <div slot="title">排行榜</div>
        <div>3</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {Tab,Tabs} from 'vant'
  import homeTabfirst from '@/views/homeTabone/homeTabfirst'
  export default {
    components:{
      homeTabfirst,
      [Tab.name]:Tab,
      [Tabs.name]:Tabs,
    },
    name: "homeTabone",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .my_tab_one{
    background: #fff;
  }
  .my_tab_one /deep/ .van-tabs__line{
    background-color:#4AB4FE;
    bottom:22px;
  }
  .my_tab_one /deep/ .van-tab{
    color: #333;
  }
</style>
