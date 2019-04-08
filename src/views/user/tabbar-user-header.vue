<template>
  <div class="user-header">
    <div class="us_group">
      <div class="us_gp_l">
        <img src="../../assets/images/morentouxiang.png" alt="">
        <div class="us_txt">
          <p class="name">天地一人</p>
          <p class="us_num">
            <i></i>
            <span>18820001000</span>
          </p>
        </div>
      </div>
      <div class="us_gp_r">
        <router-link tag="a" to="/22">
          <i class="us_btn-i01"></i>
        </router-link>
      </div>
    </div>
    <div class="us_item-con">
      <div class="us_list">
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
      </div>
      <div class="us_h1"></div>
      <div class="us_list">
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
        <div>
          <router-link tag="a" to="66">
            <div class="title">粉丝</div>
            <div class="num-shu">12万</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .user-header{
    background:url("../../assets/images/beijing.png")no-repeat;
    width:375px;
    height:184px;
    background-size: cover;
    position: relative;
    padding-top:24px;
    margin-bottom:84px;
    .us_group{
      display: flex;
      flex-flow:row nowrap;
      justify-content:space-between;
      margin:0 12px 16px;
      .us_gp_l{
        font-size:0;
        img,.us_txt{
          display:inline-block;
          vertical-align: top;
        }
        img{
          margin-right:11px;
        }
        .us_txt{
          .name{
            font-size:16px;
            font-weight:700;
            color:#fff;
            margin:10px 0;
            padding-left:5px;
          }
          .us_num{
            i{
              background:url("../../assets/images/sj-ico.png")no-repeat;
              display:inline-block;
              width:21px;
              height:21px;
              vertical-align:middle;
            }
            span{
              font-size:14px;
              color:#fff;
              display: inline-block;
              vertical-align:middle;
            }
          }
        }
      }
      .us_gp_r{
        .us_btn-i01{
          background: url("../../assets/images/shezhi.png")no-repeat;
          display: inline-block;
          background-size:cover;
          width:21px;
          height:21px;
        }
      }
    }
    .us_item-con{
      position: absolute;
      top:104px;
      left:12px;
      height:153px;
      width:351px;
      background:#fff;
      border-radius:10px;
      padding:28px 12px;
      .us_list{
        display: flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        >div{
          width:100px;
          text-align: center;
          .title{
            color: #666;
            font-size:12px;
            margin-bottom:10px;
          }
          .num-shu{
            color: #333;
            font-size:15px;
          }
        }
      }
      .us_h1{
        border-top:1px solid #DEDEDE;
        margin:12px 0;
      }
    }
  }
</style>
