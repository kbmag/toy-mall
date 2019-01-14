<template>
  <div class="m-header">
    <div class="header">
      <van-icon name="arrow-left" @click="onClickLeft" />
    </div>
    <div class="title">{{mTitle}}</div>
  </div>
</template>

<script>
  export default {
    name: "m-header",
    props:{
      mTitle: {
        type: String,
        default: ''
      }
    },
    data(){
      return{

      }
    },
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped lang="less">
  .m-header{
    .header{
      width:100%;
      height:46px;
      line-height:46px;
      background:#fff;
      i{
        font-size: 20px;
        vertical-align:middle;
        left:8px;
      }
    }
    .title{
      margin-top:25px;
      width: 100%;
      font-size: 25px;
      color: #333;
      padding:0 27px;
    }
  }
</style>
