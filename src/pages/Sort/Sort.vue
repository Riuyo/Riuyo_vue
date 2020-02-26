<template>
  <div id="cateContainer">
    <div class="header">
    <div class='searchIpt'>
				<i class="iconfont icon-sousuo"></i>
				<span>搜索商品,共22018款好物</span>
			</div>
    </div>

    <div class="content">
      <div class="left">
        <SortLeft />

      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import SortLeft from './SortLeft'
  export default {
    components: {
      SortLeft
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #cateContainer
    .header
      width 100%
      height 88px
      box-sizing border-box
      padding 16px 30px
      border-bottom 1px solid #eee
      background-color #fff
      .searchIpt
        background-color #eeeeee
        width 690px
        height 56px
        line-height 56px
        text-align center
        border-radius 10px
        i
          margin-right 20px
    .content
      display flex
      height calc(100vh - 50px)
      .left
        width 160px
        background pink
      .right
        width 590px
</style>
