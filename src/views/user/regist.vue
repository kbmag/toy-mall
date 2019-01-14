<template>
  <div class="regist">
    <mheader :mTitle="'注册'"></mheader>
    <div class="regist-page">
      <div class="input_item">
        <input type="text" placeholder="请输入手机号" style="color:red;font-size:16px">
      </div>
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

      };
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .regist{
    .regist-page{
      padding:0 27px;
    }
  }
</style>
