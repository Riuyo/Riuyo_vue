<template>
  <div class="homeContainer">
    <!-- 头部 -->
    <div class="headerWrap">
      <!-- logo+搜索框+登录 -->
      <div class="line">
        <!-- logo -->
        <a class="logo" src="../../common/logo.png" href=""></a>
        <!-- 搜索框 -->
        <div class="topSearchIpt">
          <input class="txt" type="text" placeholder="搜索商品,共20261款好物" />
        </div>
        <!-- 登录 -->
        <div class="loginBtn">登录</div>
      </div>
      <!-- 选项 -->
      <div class="tabWrap">
        <div class="tabs">
          <!-- style="position:relative;height:100%;width:100%;overflow:hidden;" -->
          <ul class="list">
            <li >推荐</li>
            <li >居家生活</li>
            <li >服饰鞋包</li>
            <li >美食酒水</li>
            <li >个护清洁</li>
            <li >母婴亲子</li>
            <li >运动旅行</li>
            <li >数码家电</li>
            <li >全球特色</li>
          </ul>
        </div>
        <!-- 下拉菜单 -->
        <div class="toggleWrap"></div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
    </div>
    <!-- 商品列表 -->
    <div class="listContainer">
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeComtainer
    display flex
    width 100%
    .headerWrap
      width 750px
      height 148px
      .line
        width 100%
        height 88px
        .logo
          width 138px
          height 40px
        .input
          width 442px
          height 56px 
      .tabWrap
          width 750px
          height 60px
          position relative
          .toggleWrap
            position absolute




    .swiper
      width 100%
      height 370px


 
</style>
