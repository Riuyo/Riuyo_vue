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
        <li v-for="(navItem,index) in indexCateModule" :key="index">
          <span>{{navItem.name}}</span>
        </li>
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
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          
           
      </div>
    </div>


    <!-- 服务 -->
    <ul class="service-policy">
      <li>
        <img class="icon">
        <span>网易自营品牌</span>
      </li>
      <li>
        <img class="icon">
        <span>30天无忧退货</span>
      </li>
      <li>
        <img class="icon">
        <span>48小时快速退款</span>
      </li>
    </ul>

    <!-- 商品列表 -->
    <div class="shopList-nav">
      <ul>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="">
          <span>新品首发</span>
        </li>
      </ul>
    </div>
    <!-- 促销 -->
    <div class="promotion-module">
      <div class="floor-top">
        <div class="prom-good">
          <img src="https://yanxuan-item.nosdn.127.net/8710b394afc12ff039fac08dfb9333bb.png?imageView&thumbnail=168x0&quality=75" alt="">
          <div class="price-wrap">
            <span>￥199</span>
          </div>
        </div>
        <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
      </div>
      <div class="floor-first">
        <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
      </div>
      <div class="floor-list">
        <ul>
          <li><img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
        </ul>
      </div>
    </div>
    <!-- 新人 -->
    <div class="freshman-module">
      <div class="module-title">
        <span>新人专享礼</span>
      </div>
      <div class="module-content">
        <div class="content-left">
          <div class="font-wrap"><span>新人专享礼包</span></div>
          <div class="img-wrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
        <div class="content-right">
          <div class="module1">
            <div class="small-title">
              <span class="big-title">福利社</span><br>
              <span class="sub-title">今日特价</span>
            </div>
            <div class="small-img">
              <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="module2">
            <div class="small-title">
              <span class="big-title">新人拼团</span><br>
              <span class="sub-title">1元起包邮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 热销 -->
    <div class="category-hotSell-module">
      <div class="hotSell-module-title"><span>类目热搜榜</span></div>
      <div class="hotSell-module-content">
        <div class="content-top">
          <div class="content-top-left">
            <div class="text">
              <span>热销榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="content-top-right">
             <div class="text">
              <span>好评榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <ul>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
     <div class="flashSale-module">
      <div class="flashSale-module-title">
        <div class="flashSale"><span>限时购</span></div>
        <div class="count-time">
          <span class="hour">00</span>
          <span class="dot">:</span>
          <span class="minute">00</span>
          <span class="dot">:</span>
          <span class="second">00</span>
        </div>
        <div class="more">更多 ></div>
      </div>
      <div class="flashSale-content">
        <ul>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/ea6c08830f50ec39cf128ec0a74689b5.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥95</span>
              <span><del>￥109</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/2f34b0b66f0b17945701dea172bbe3ac.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥35.3</span>
              <span><del>￥49</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/64c3915f7edb71c10dbfbd18441f271c.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥85</span>
              <span><del>￥99.9</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0d4f361e444e09755eaf53fe47f40f9a.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥289</span>
              <span><del>￥369</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/6f8849cd376ea181f977f0ae40f309eb.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥46.8</span>
              <span><del>￥52</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/77d6cf0dd69d5c944fc652ea7fae04ab.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥206</span>
              <span><del>￥229</del></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新品 -->
    <div class="newItem-module">
      <div class="newItem-title">
        <div class="newItem"><span>新品首发</span></div>
        <div class="more">更多 ></div>
      </div>
      <div class="newItem-content">
        <ul>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 断货 -->
    <div class="sceneLight-shoppingGuide-module">
      <ul>
        <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom-copyright-module">
      <div class="load">
        <a class="app" href="#1">下载App</a>
        <a class="computer" href="#2">电脑版</a>
      </div>
      <div class="copyright">
        <span class="copy1">网易公司版权所有 @1997-2020</span>
        <span class="copy2">食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {

  methods:{

  },

  mounted(){

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
  background-color #ededed

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
    background-color white
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

          span
            display block
            width 100%
            height 100%
            text-align center
            font-size 24px
            

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

  //服务
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
  //商品列表
  .shopList-nav
    width 100%
    height 340px
    padding-bottom 32px
    background-color #fff
    ul
      width 100%
      height 100%
      li
        margin 10px 0
        display flex
        flex-direction column
        align-items center
        width 20%
        height 156px
        float left
        img 
          width 110px
          height 110px
          border-radius 30px
        span 
          margin-top 10px
  // 促销
  .promotion-module
    width 100%
    background-color #fff
    .floor-top, .floor-first
      position relative
      img 
        width 100% 
      .prom-good
        overflow hidden
        position absolute
        left 75px
        top 45px
        width 168px
        height 168px
        >img
          position absolute
          left 0
          top -10px
        .price-wrap
          position absolute
          left 10px
          bottom 17px
          width 132px
          height 32px
          line-height 32px
          text-align center
          background-color #F48F18
          border-radius 30px
          color #fff
          padding 0 10px
          span 
            font-size 12px

    .floor-first, .floor-list
      padding 0 20px
      background-color #1674e3
    .floor-list
      width 100%
      overflow hidden
      padding-bottom 20px
      ul
        width 100%
        li
          width 350px
          height 186px
          margin-top 10px
          float left
          img 
            width 100%  
            height 100%  
          &:nth-child(2n+1)
            margin-right 10px     
  // 新人专享
  .freshman-module
    width 100%
    padding 0 30px 30px 30px
    box-sizing border-box
    background-color #fff
    margin 20px 0 30px 0
    //标题
    .module-title
      width 100%
      height 90px
      color #333
      font-size 32px
      text-align center
      line-height 90px
      span
        position relative
        &::before,&::after
          content ''
          display block
          position absolute
          left -48px
          top 50%
          width 30px
          height 4px
          background-color #333
        &::after
          left auto
          right -48px
    //内容
    .module-content
      display flex
      width 100%
      >div
        width 50%
        height 434px
      //左
      .content-left
        background-color #F9E9CF
        margin-right 5px
        border-radius 5px
        .font-wrap
          width 100%
          font-size 32px
          padding 40px 0 0 40px
          box-sizing border-box
        .img-wrap
          width 100%
          height 258px
          margin-top 45px
          position relative
          img 
            width 258px
            height 258px
            position absolute
            left 50%
            transform translate(-50%)
            top 0
      //右
      .content-right
        >div
          width 100%
          height 215px
          border-radius 5px
          box-sizing border-box
          overflow hidden
        .module1,.module2
          position relative
          padding 20px 0 0 30px
          margin-bottom 5px
          background-color #fbe2d3
          .small-title
            span 
              line-height 40px
            .big-title
              font-size 32px
            .sub-title
              font-size 20px
          .small-img
            position absolute
            right 0
            top 0
            width 200px
            height 200px
            padding-top 20px
            .discount
              width 80px
              height 80px
              background-color #f6a447
              border-radius 50%
              position absolute
              right 30px
              top 15px
              z-index 99
              >span 
                position absolute
                left 20px
                color #fff
              .price1
                top 20px
              .price2
                top 40px
            img 
              width 200px
              height 200px
        .module2
          background-color #ffecc2
          .sub-title
            background-color rgba(0,0,0,0.2)
            border-radius 5px
            color #fff
            padding 0 8px

  // 热销
  .category-hotSell-module
    width 100%
    padding 0 30px 20px 
    box-sizing border-box
    background-color #fff
    .hotSell-module-title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
    .hotSell-module-content
      width 100%
      //上半部分
      .content-top
        display flex
        width 100%
        height 200px
        >div
          width 50%
          height 100%
          border-radius 5px
        .content-top-left, .content-top-right
          display flex
          width 338px
          background-color #f9f3e4
          padding-left 20px
          line-height 150px
          margin 0 10px 10px 0
          box-sizing border-box
          >div
            width 50%
            height 100%
          .text
            position relative
            font-size 28px
            &::after
              content ''
              display block
              position absolute
              left 0
              top 50%
              margin-top 10px
              width 48px
              height 4px
              background-color #666
          .img-wrap
            width 100%
            height 100%
            img 
              width 200px
              height 200px
        .content-top-right
          background-color #ebeff6
          margin-right 0
      //下半部分
      .content-bottom
        margin-top 10px
        width 100%
        ul
          width 100%
          overflow hidden
          box-sizing border-box
          li
            position relative
            width 165px
            height 180px
            float left
            border-radius 5px
            background-color #f5f5f5
            margin 0 10px 10px 0
            &:nth-child(4), &:nth-child(8)
              margin-right 0
            .title
              width 100%
              height 36px
              font-size 24px
              text-align center
              line-height 36px
              padding-top 10px
            .img-wrap 
              position absolute
              left 50%
              transform translateX(-50%)
              top 50px
              width 120px
              height 120px
              text-align center
              img 
                width 100%
                height 100%
  // 限时购
  .flashSale-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    .flashSale-module-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .flashSale
        flex-grow 1
      .count-time
        flex-grow 7
        .hour, .minute, .second
          width 36px
          height 36px
          background-color #333
          text-align center
          line-height 36px
          color #fff
          font-size 24px
          padding 0 5px
          border-radius 5px
        .dot
          margin 0 10px
      .more
        font-size 20px
        flex-grow 2
        text-align right
    .flashSale-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 216px
          float left
          padding-bottom 30px
          margin-right 20px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 216px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .price
            width 100%
            margin-top 10px
            padding-left 20px
            span 
              &:nth-child(1)
                color red
                font-size 28px
                margin-right 10px
              &:nth-child(2)
                font-size 24px
  
  // 新品
  .newItem-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    .newItem-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .newItem
        flex-grow 1
      .more
        font-size 20px
        flex-grow 2
        text-align right
    .newItem-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 216px
          float left
          padding-bottom 30px
          margin-right 20px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 216px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .good
            width 100%
            font-size 22px
            .newItemDesc
              width 100%
              line-height 35px
              margin-top 10px
            .price
              color red
              padding 10px 0
            .tag-wrap
              width 54px
              height 30px
              text-align center
              line-height 30px
              border 1px solid red
              span
                color red
  
  // 断货
  .sceneLight-shoppingGuide-module
    width 100%
    padding 0 20px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    ul
      width 100%
      overflow hidden
      li
        float left
        width 49%
        margin 0 5px 5px 0
        padding 20px 0 0 20px
        box-sizing border-box
        background-color #f5f5f5
        .title
          >span
            line-height 42px
            &:nth-child(1)
              font-size 24px
            &:nth-child(2)
              font-size 24px
              color #7f7f7f
        .pic
          display flex
          img
           width 150px
           height 150px
        &:nth-child(2), &:nth-child(4)
          margin-right 0
        &:nth-child(3), &:nth-child(4)
          margin-bottom 0     
    
  //底部
  .bottom-copyright-module
    width 100%
    height 244px
    background-color #333
    margin-bottom 88px
    font-size 22px
    color grey
    .load
      display flex
      justify-content center
      align-items center
      padding-top 20px
      width 100%
      height 122px
      a
        border 1px solid gray
        display block
        text-align center
        width 172px
        height 62px
        line-height 62px
        color white
        &.app
          margin-right 100px
    .copyright
      display flex
      flex-direction column
      text-align center
      line-height 30px
  
  
</style>
