<template>
  <div class="footer">
    <div class="item item2" :class="{icon11: footerIndex === 0, icon1: footerIndex !== 0}">首页</div>
    <div class="item item2" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}">找玩具</div>
    <div class="item item1">
      <div class="outbox">
          <span class="open"></span>
      </div>
      <p class="commit">发布</p>
    </div>
    <div class="item item2" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}">头条</div>
    <div class="item item2" :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}">我的</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        footerIndex:'',
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .footer{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height:50px;
    z-index: 999;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    .item{
      width: 100%;
      height: 100%;
      color: #888;
      font-size:12px;
      text-align: center;
      text-decoration: none;
      &.icon1{
        background: url('../assets/images/shouye.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon11{
        background: url('../assets/images/shouye-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon2{
        background: url('../assets/images/zhaowanju.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon22{
        background: url('../assets/images/zhaowanju-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon4{
        background: url('../assets/images/toutiao.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon44{
        background: url('../assets/images/toutiao--xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon5{
        background: url('../assets/images/wode.png') no-repeat center 25%;
        background-size:21px;
      }
      &.icon55{
        background: url('../assets/images/wode-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      .outbox{
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color:#fff;
        margin: 0 auto;
        display: block;
        position: relative;
        .open{
          width:45px;
          height:45px;
          display: block;
          border-radius: 50%;
          margin:3px auto;
          background:url('../assets/images/fabu.png') no-repeat;
          -webkit-background-size:45px 45px;
          background-size: 45px 45px;
          background-position: 50%  50%;
        }
      }
    }
    .item2{
      line-height:75px;
    }
    .item1{
      padding-bottom:27px;
      box-sizing: border-box;
      position: relative;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
