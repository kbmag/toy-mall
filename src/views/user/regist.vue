<template>
  <div class="regist">
    <div class="">
      <div class="tit">注册</div>
    </div>
    <van-cell-group>
      <van-field
        v-model="phone"
        placeholder="请输入手机号"
      >
      </van-field>
      <van-field
        v-model="code"
        center
        clearable
        placeholder="请输入4位验证码"
      >
        <div slot="icon" @click="getCode">
          <van-button  size="small" type="primary" v-if="jj" >60s后获取</van-button>
          <!--<van-button  size="small" type="primary" v-else>发送验证码</van-button>-->
        </div>
      </van-field>
    </van-cell-group>
    <div>注册</div>
  </div>
</template>

<script>
  export default {
    name: "Regist",
    data(){
      return{
        jj:true,
        phone:'',
        code:'',
      };
    },
    methods:{
      getCode() {
        alert(1313)
      },
    }
  }
</script>

<style scoped lang="less">
  .regist{

  }
</style>
