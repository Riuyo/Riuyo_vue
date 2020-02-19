<template>
  <div id="home">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部上边 -->
      <div class="hdTop">
        <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        <div class="searchIpt">
          <i class="iconfont icon-sousuo"></i>
          <input class="searchTxt" type="text" placeholder="搜索商品,共20420款好物">
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <!-- 导航 -->
      <div class="navWrapper">
        <ul class="navContent">
          <li>推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
          <li>推荐推荐</li>
        </ul>
      </div>
      
      <!-- 新人专享 -->
      <div class="newuser">

      </div>


    </div>
    
    <!-- 轮播图 -->
    <div class="swiperContainer">
      <div class="swiperWrapper">
        <div class="swiper-slide">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'

export default {
  data(){
    return{
   
    }
  },
  mounted(){
    new Swiper("swiperContainer",{
      loop:true,
      pagination:{
        el:"swiper-pagination"
      }
    });
    new BScroll('.navWrapper',{
      scrollY:false
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#home
  width 100%
  height 5000px
  background pink

  // 头部
  .header
    width 100%
    height 148px

    // 头部长条
    .hdTop
      width 750px
      height 68px
      padding 15px
      display flex
      justify-content center 
      align-items flex-start
      .logo
        width 138px
        height 40px
        margin 10px 0 0 15px

      .searchIpt
        width 442px
        height 54px
        line-height 60px
        margin 0 15px
        border-radius 5px
        background #ededed
        position relative

        .iconfont
          font-size 30px 
          position absolute
          left 20px

        .searchTxt
          width 350px
          color #666
          font-size 30px
          margin-left 80px
          background #ededed

      .loginBtn 
        width 74px
        height 40px
        line-height 40px
        text-align center
        color red
        border 1px solid red
        margin 6px 0
  
      
    
    //头部导航
    .navWrapper
      width 650px
      height 60px
      background-color yellowgreen
      .navContent
        width 1000px
        height 100%
        display flex
  
  // 轮播图
  .swiperContainer
    width 100%
    height 370px
    .swiperWraper
      width 2250px
      height 100%
      img  
        display block
        width 750px
        height 370px
    
     


          
         
          
          
 


</style>
