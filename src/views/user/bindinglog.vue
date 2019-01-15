<template>
  <div class="regist">
    <mheader :mTitle="'绑定'"></mheader>
    <div class="toy-page">
      <div class="input_item">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="input_item">
        <input type="text" placeholder="请输入4位验证码">
        <span class="inp_right">
          <a class="getvalidate">
            获取验证码
          </a>
        </span>
      </div>
      <div class="bm-button">绑定并登录</div>
    </div>
    <div class="bottom_xieyi">
      <van-checkbox v-model="checked" checked-color="#4AB4FE">
        已阅读并同意<router-link to="jj">《用户协议》</router-link>
      </van-checkbox>
    </div>
  </div>
</template>

<script>
  import mheader from "@/components/common/m-header";
  export default {
    name: "Regist",
    components: {
      mheader
    },
    data(){
      return{
        checked: true
      };
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .regist{
    .toy-page{
      padding:0 27px;
      margin-top:50px;
      .input_item{
        position: relative;
        margin-bottom:20px;
        input{
          width:100%;
          height:40px;
          line-height:40px;
          font-size:15px;
          border-bottom:1px solid #dedede;
          color: #333;
          &::-webkit-input-placeholder{ /* WebKit browsers */
            color: #ccc;
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #ccc;
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #ccc;
          }
          &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #ccc;
          }
        }
        .inp_right{
          font-size:14px;
          .forget-password{
            position: absolute;
            right: 0;
            top:12px;
            color:#333;
          }
          .getvalidate{
            position: absolute;
            right: 0;
            top:4px;
            width:99px;
            height:30px;
            line-height: 30px;
            text-align: center;
            display: inline-block;
            background:#4AB4FE;
            color: #fff;
            border-radius: 3px;
          }
        }
      }
      .bm-button {
        text-align: center;
        height: 45px;
        line-height: 45px;
        color: #fff;
        font-size: 16px;
        background: #4AB4FE;
        border-radius: 23px;
        margin-top: 30px;
      }
    }
    .bottom_xieyi{
      width:100%;
      height:24px;
      position: fixed;
      line-height: 24px;
      text-align: center;
      bottom:27px;

    }
  }
</style>
