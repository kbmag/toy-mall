<template>
  <div class="login">
    <mheader></mheader>
    <div class="wx_content">
      <div class="toys_lgImg">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="wxa_Btn" @click="ll">
        <i class="icon_weixin"></i>
        微信登录
      </div>
      <div class="other_log_mod">其他登录方式</div>
      <div class="log_mod">
        <div class="log_item">
          <i class="icon_qq"></i>
          <div class="txt">QQ登录</div>
        </div>
        <router-link  to="/phonelogin">
          <div class="log_item">
            <i class="icon_shouji"></i>
            <div class="txt">手机登录</div>
          </div>
        </router-link>
        <router-link  to="/accountlogin">
        <div class="log_item">
          <i class="icon_zhanghao"></i>
          <div class="txt">账号登录</div>
        </div>
        </router-link>
      </div>
    </div>
    <router-link to="/regist" tag="div" class="new_reg">新人注册</router-link>
  </div>
</template>

<script>
  import mheader from "@/components/common/m-header";
  export default {
    name: "login",
    components: {
      mheader
    },
    methods:{
      ll:function(){
        alert(222)
      }
    }
  }
</script>

<style lang="less" scoped>
  .login{
    position: fixed;
    width:100%;
    height:100%;
    background:#fff;
    .wx_content{
      padding:0 27px;
      .toys_lgImg{
        text-align: center;
        margin-top: 73px;
        margin-bottom:156px;
      }
      .wxa_Btn{
        .icon_weixin{
          background:url("../../assets/images/weixin.png")no-repeat;
          background-size:100% 100%;
          display: inline-block;
          width:22px;
          height:18px;
          vertical-align:-3px;
        }
        text-align:center;
        height:45px;
        line-height: 45px;
        background:#0FCE0D;
        color: #fff;
        font-size: 16px;
        border-radius:23px;
      }
      .other_log_mod{
        text-align:center;
        font-size:15px;
        color: #666666;
        position:relative;
        margin-top:25px;
        margin-bottom:43px;
        &:before,&:after{
          content: '';
          position: absolute;
          height:1px;
          width:93px;
          background:#ccc;
          top:50%;
        }
        &:before{
          left:11px;
        }
        &:after{
          right:11px;
        }
      }
      .log_mod{
        display: flex;
        justify-content:space-around;
        .log_item{
          text-align: center;
          .icon_qq{
            background:url("../../assets/images/QQ-(2).png")no-repeat;
            background-size:100% 100%;
            display:inline-block;
            width:25px;
            height:25px;
          }
          .icon_shouji{
            background:url("../../assets/images/shouji.png")no-repeat;
            background-size:100% 100%;
            display:inline-block;
            width:25px;
            height:25px;
          }
          .icon_zhanghao{
            background:url("../../assets/images/zhanghao.png")no-repeat;
            background-size:100% 100%;
            display:inline-block;
            width:25px;
            height:25px;
          }
          .txt{
            font-size: 14px;
            color:#333;
            margin-top:14px;
          }
        }
      }
    }
    .new_reg{
      width:100%;
      background:#F5F5F5;
      height:50px;
      line-height:50px;
      text-align: center;
      font-size: 17px;
      color: #666;
      position: fixed;
      bottom:0;
    }
  }
</style>
