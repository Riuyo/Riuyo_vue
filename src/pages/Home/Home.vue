<template>
  <div id="homeContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      <div class="searchIpt">
        <i class="iconfont icon-sousuo"></i>
        <input class="searchTxt" type="text" placeholder="搜索商品,共20420款好物">
      </div>
      <div class="loginBtn">登录</div>
    </div>
 
    <!-- 导航 -->
    <div class="navContainer">
      <ul class="navList">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
    </div>
    
    <!-- 轮播图 -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  mounted(){
    new BScroll('.navContainer',{
      scrollX:true,
      // probeType:2,
      // click:true
    })
  }
}
</script>

<style lang="stylus">
#homeContainer
  width 100%
  height 5000px
  background-color pink 

  // 头部
  .header
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color white

    .logo
      width 140px
      height 40px
      margin 10px 0 0 10px

    .searchIpt
      width 440px
      height 60px
      background #ededed
      position relative
      margin 0 30px
      border-radius 10px
      
      .iconfont
        font-size 30px
        position absolute
        left 10px
        top 25%

      .searchTxt
        border-radius 10px
        width 390px
        height 60px
        background-color #ededed
        margin-left 60px

    .loginBtn
      width 74px
      height 40px
      line-height 40px
      text-align center
      border 2px solid red
      margin-top 10px
      border-radius 5px
      color red

  // 导航
  .navContainer
    width 100%
    height 60px
    line-height 60px
    font-size 28px
    background-color hotpink
    overflow hidden
  
    .navList
      width 1460px
      height 100%
      display flex
      flex-wrap nowrap
      white-space nowrap
  
      li
        font-size 28px
        line-height 60px
        text-align center
        margin 0 20px
  


  // 轮播图


 
</style>
