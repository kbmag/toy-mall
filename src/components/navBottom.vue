<template>
  <div class="footer">
    <router-link tag="div" class="item item2" to="/home">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="item item2" to="/zwj">
      <span class="tab-link">找玩具</span>
    </router-link>
    <div class="item item1">
      <div class="outbox">
        <span class="open"></span>
      </div>
      <p class="commit">发布</p>
    </div>
    <router-link tag="div" class="item item2" to="/tabbar-user">
      <span class="tab-link">头条</span>
    </router-link>
    <router-link tag="div" class="item item2" to="/login">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data(){
      return{

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
    box-shadow:0px 0px 10px rgba(0,0,0,.6);
    .item{
      width: 100%;
      height: 100%;
      color: #888;
      font-size:12px;
      text-align: center;
      text-decoration: none;
      .outbox{
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color:#fff;
        margin: 0 auto;
        display: block;
        position: relative;
        box-shadow:0px 0px 15px rgba(0,0,0,.6);
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
      &:nth-child(1){
        background: url('../assets/images/shouye.png') no-repeat center 25%;
        background-size:21px;
      }
      &:nth-child(2){
        background: url('../assets/images/zhaowanju.png') no-repeat center 25%;
        background-size:21px;
      }
      &:nth-child(4){
        background: url('../assets/images/toutiao.png') no-repeat center 25%;
        background-size:21px;
      }
      &:nth-child(5){
        background: url('../assets/images/wode.png') no-repeat center 25%;
        background-size:21px;
      }
      &.router-link-active:nth-child(1){
        background:url('../assets/images/shouye-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.router-link-active:nth-child(2){
        background: url('../assets/images/zhaowanju-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.router-link-active:nth-child(4){
        background: url('../assets/images/toutiao--xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.router-link-active:nth-child(5){
        background: url('../assets/images/wode-xuanzhong.png') no-repeat center 25%;
        background-size:21px;
      }
      &.router-link-active{
        .tab-link{
          color:#0094FB;
        }
      }
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
