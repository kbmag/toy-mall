<template>
  <div class="first">
    <div class="firstList">
      <div class="list_top">
        <div class="list_top_fl">
          <div class="list_top_img">
            <img src="../../assets/images/qiye.png" alt="" @click="gg">
          </div>
          <div class="list_top_name">
            <div class="name_txt">快乐的小猪</div>
            <div class="name_bottom">
              <span>
                <van-icon class="link_color" name="like"/>
                10
              </span>
            </div>
          </div>
        </div>
        <div class="list_top_fr">
          <span class="like-n">+关注</span>
        </div>
      </div>
      <div class="list_zj">
        汽车挖掘机和消防车玩具试玩，婴幼儿宝宝游戏视频，玩H501婴幼儿宝宝游戏玩具视频h82739...
      </div>
      <ul class="list_zj_img">
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
      </ul>
      <div class="list_db">
        <ul>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="firstList">
      <div class="list_top">
        <div class="list_top_fl">
          <div class="list_top_img">
            <img src="../../assets/images/qiye.png" alt="">
          </div>
          <div class="list_top_name">
            <div class="name_txt">快乐的小猪</div>
            <div class="name_bottom">
              <span>
                <van-icon class="link_color" name="like"/>
                10
              </span>
            </div>
          </div>
        </div>
        <div class="list_top_fr">
          <span class="like-n">+关注</span>
        </div>
      </div>
      <div class="list_zj">
        汽车挖掘机和消防车玩具试玩，婴幼儿宝宝游戏视频，玩H501婴幼儿宝宝游戏玩具视频h82739...
      </div>
      <ul class="list_zj_img">
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/qiye.png" alt="">
        </li>
      </ul>
      <div class="list_db">
        <ul>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
          <li>
            <img src="../../assets/images/qiye.png" alt="">
            <span>快乐小猪1210</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon,Toast } from 'vant';
  export default {
    name: "homeTabfirst",
    components:{
      [Icon.name]:Icon,
    },
    methods:{
      gg:function(){
        Toast('提示内容');
      }
    }
  }
</script>

<style scoped>
  .first{
    margin-bottom:50px;
  }
  .first .firstList{
    padding:12px;
    border-bottom:1px solid #ebedf0;
  }
  .first .firstList .list_top{
    display: flex;
    justify-content:space-between;
    margin-bottom:12px;
  }
  .list_top_fl{
    display: flex;
  }
  .first .firstList .list_top .list_top_img{
    width:36px;
    height:36px;
  }
  .first .firstList .list_top .list_top_img img{
    width:100%;
    height:100%;
  }
  .list_top_name{
    margin-left:7px;
  }
  .list_top_name .name_txt{
    font-weight:bold;
    margin-top:2px;
    margin-bottom:6px;
  }
  .list_top_fr{
    display: flex;
    align-items: center;
  }
  .list_top_fr .like-n{
    color:#4AB4FE;
  }
  .link_color{
    color:#FF611B;
    vertical-align:-2px;
  }
  .name_bottom span{
    font-size: 12px;
    color:#666666;
  }
  .list_zj{
    line-height:20px;
    margin-bottom:10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow:hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
  }
  .list_zj_img{
    display:flex;
    justify-content: space-between;
    margin-bottom:8px;
  }
  .list_zj_img li{
    width:112px;
    height:87px;
  }
  .list_zj_img li img{
    width:100%;
    height:100%;
  }
  .list_db ul{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

  }
  .list_db ul::-webkit-scrollbar{
    display: none;
  }
  .list_db ul li{
    flex-shrink:0;
    font-size: 13px;
    color:#666666;
    width:93px;
    height:25px;
    line-height:25px;
    border-radius:2px;
    background:#F2F3F7;
    margin-right:8px;

  }
  .list_db ul li img{
    width:16px;
    height:16px;
    border-radius:50%;
    margin-left:5px;
    vertical-align:4px;
  }
  .list_db ul li span{
    display: inline-block;
    width:65px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>
