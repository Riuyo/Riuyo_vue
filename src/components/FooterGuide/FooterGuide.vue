<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/home'}" 
    @click="goPath('/home')" class="guideItem">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </div>

    <div :class="{active: $route.path === '/sort'}" 
    @click="goPath('/sort')" class="guideItem">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>

    <div :class="{active: $route.path === '/worth'}" 
    @click="goPath('/worth')" class="guideItem">
      <i class="iconfont icon-xiangce"></i>
      <span>值得买</span>
    </div>

    <div :class="{active: $route.path === '/cart'}"
    @click="goPath('/cart')" class="guideItem">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>


    <div :class="{active: $route.path === '/personal'}" 
    @click="goPath('/personal')" class="guideItem">
      <i class="iconfont icon-wode"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    .guideItem
      width 25%
      height 50px
      text-align center
      display flex
      flex-direction column
      &.active
        color $green
      .iconfont
        font-size 22px
        line-height 30px
</style>
