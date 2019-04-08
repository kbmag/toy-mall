<template>
  <div class="tabbar_order_con">
    <van-cell-group>
      <van-cell title="我的订单" isLink>
        <router-link to="" class="text-desc">查看全部</router-link>
      </van-cell>
    </van-cell-group>
    <div class="order_status">
      <van-row>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <i class="daifukuan">
              <span>1</span>
            </i>
          </div>
          <div>待付款</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <i class="daifahuo">
              <span>20</span>
            </i>
          </div>
          <div>待发货</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <i class="daishouhuo"></i>
          </div>
          <div>待收货</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <i class="tuihuan"></i>
          </div>
          <div>退款售后</div>
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
  .tabbar_order_con{
    margin:0 12px 10px;
    .van-cell-group{
      border-top-left-radius:10px;
      border-top-right-radius:10px;
      .van-cell{
        background-color:transparent;
      }
    }
    .order_status{
      background:#fff;
      text-align: center;
      font-size:12px;
      padding:14px 0;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
      .order_status_icon {
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-block;
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          color: #000;
          display: inline-block;
          width:26px;
          height:26px;
          span{
            position: absolute;
            top:-6px;
            color: #FF3867;
            font-size:12px;
            font-style:normal;
            text-align: center;
            padding:3px 6px;
            min-width:16px;
            box-sizing: border-box;
            line-height:10px;
            border:1px solid #FF3867;
            border-radius:15px;
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
            -webkit-transform-origin: 100%;
            transform-origin: 100%;
          }
        }
        .daifukuan{
          background:url("../../assets/images/daifukuan.png")no-repeat;
        }
        .daifahuo{
          background:url("../../assets/images/daifahuo.png")no-repeat;
        }
        .daishouhuo{
          background:url("../../assets/images/daishouhuo.png")no-repeat;
        }
        .tuihuan{
          background:url("../../assets/images/tuihuan.png")no-repeat;
        }

      }
    }
  }
</style>
