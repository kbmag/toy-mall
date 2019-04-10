<template>
  <div class="tabbar_order_con">
    <van-cell-group>
      <van-cell title="知名品牌"></van-cell>
    </van-cell-group>
    <div class="barnd_con">
      <van-row gutter="8">
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
        <van-col class="col_3" span="8">
          <a href="javascript:;">
            <span class="barnd_span_img">
              <img src="../../assets/images/1.png" alt="">
            </span>
            <span class="barnd_span_txt">乐高</span>
          </a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .van-hairline--top-bottom::after{
    border:none;
  }
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
      padding:6px 10px;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
      .col_3{
        margin-bottom:10px;
        .barnd_span_img{
          width:105px;
          height:65px;
          display: block;
          background: #f3f3f3;
          position: relative;
          img{
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
          }
        }
        .barnd_span_txt{
          width:105px;
          height:20px;
          line-height:20px;
          background:#4AB4FE;
          display: inline-block;
          text-align: center;
          color:#fff;
        }
      }
    }
  }
</style>
