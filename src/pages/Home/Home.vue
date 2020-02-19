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
      <!-- 下拉菜单 -->
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>

    </div>
    
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>   
           <div class="swiper-slide">
            <img src="../../common/100b633b1b237e0102458bbf4d851cb9.webp" alt="">
          </div>             
      </div>
    </div>


    <!-- 服务 -->
    <ul class="service-policy">
      <li v-for="(policyItem, index) in policyDescList" :key="index">
        <img class="icon" :src="policyItem.icon" alt="">
        <span>{{policyItem.desc}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {

  methods:{

  },

  async mounted(){
    //发送ajax请求,获取首页数据
    let indexDatas = await this.$API.getIndexData()
    let indexCateModule = await this.$API.getIndexCateModule()
    const {focusList, policyDescList, kingKongModule,categoryHotSellModule} = indexDatas
    this.focusList = focusList
		this.policyDescList = policyDescList
    this.kingKongModule = kingKongModule.kingKongList
    this.indexCateModule = indexCateModule
    this.categoryHotSellModule = categoryHotSellModule.categoryList


    // 创建BScroll实例对象
    new BScroll('.navContainer',{
      scrollX:true,
      // probeType:2,
      // click:true
    })
    // 创建Swiper实例对象
    new Swiper ('.swiper-container', { 
      loop: true, // 循环模式选项
      pagination: {
          el: ".swiper-pagination"
        },
      paginationType: 'fraction'
  
    })  
  }


}
</script>

<style lang="stylus" rel ="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
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
    position relative
  
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
        margin 0 32px
        &.active
          color red

    .toggle
      width 100px
      height 60px
      position absolute
      right 0
      top 0
      background-color white

      .iconfont
        padding 30px
      
      
  


  // 轮播图
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 6000px
      height 370px
      .swiper-slide
        width 750px
        height 370px

    //服务政策
  .service-policy
    width 100%
    height 72px
    padding 0 30px
    background-color #fff
    box-sizing border-box
    display flex
    li
      display flex
      width 33.3333%
      height 100%
      text-align center
      line-height 72px
      font-size 24px
      .icon
        width 32px
        height 32px
        vertical-align center 
        margin 20px 5px 0


 
</style>
