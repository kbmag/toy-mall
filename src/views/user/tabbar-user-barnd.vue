<template>
  <div class="tabbar_order_con">
    <van-cell-group>
      <van-cell title="知名品牌"></van-cell>
    </van-cell-group>
    <div class="barnd_con">
      <van-row gutter="16">
        <van-col span="8">2</van-col>
        <van-col span="8">2</van-col>
        <van-col span="8">2</van-col>
        <van-col span="8">2</van-col>
        <van-col span="8">2</van-col>
        <van-col span="8">2</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .tabbar_order_con{
    margin:0 12px 10px;
    .van-cell-group{
      border-top-left-radius:10px;
      border-top-right-radius:10px;
      .van-cell{
        background-color:transparent;
      }
    }
    .barnd_con{
      background:#fff;
      text-align: center;
      font-size:12px;
      padding:14px 10px;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
    }
  }
</style>
