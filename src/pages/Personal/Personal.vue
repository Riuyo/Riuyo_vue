<template>
  <div id="personalContainer">
    <div class="personalHead">
      <div class="header">
      <div class="header-banner">
        <i class="iconfont icon-shouye"></i>
        <span class="worthTxt">值得买</span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    </div>
    <div class="personalContent">
      <div class="top">
        <div class="image">
          <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="loginButton">
          <div class="phone">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="email">
            <i class="iconfont icon-duanxin"></i>
            <span>邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    width 750px
    height 100%
    background #F2F5F4
    box-sizing border-box
    position relative
    .personalHead
      width 750px
      height 88px
      position fixed
      left 0
      top 0
      z-index 5
      background #fafafa
    .header
        width 100%
        height 100px
        .header-banner
          width 100%
          height 100px
          line-height 100px
          .worthTxt
            padding 0 180px 0 230px
            font-size 35px
          .iconfont
            padding-left 25px
            font-size 40px
            vertical-align middle
    .personalContent
      width 750px
      height 1246px
      position absolute
      left 0
      top 88px
      .top
        width 750px
        overflow hidden
        .image
          width 750px
          height 482px
          line-height 482px
          overflow hidden
          img
            display block
            width 268px
            height 90px
            margin 196px auto
        .loginButton
          width 750px
          padding 0 40px
          .phone
            width 670px
            height 94px
            line-height 94px
            text-align center
            color #ffffff
            background #dd1a21
            margin 0 0 32px
            .iconfont
              font-size 45px
              margin 0 16px 0 0
            span
              font-size 28px
          .email
            width 670px
            height 94px
            line-height 94px
            text-align center
            color  #dd1a21
            border 1px solid #dd1a21
            box-sizing border-box
            .iconfont
              font-size 45px
              margin 0 16px 0 0
            span
              font-size 28px
 
</style>
