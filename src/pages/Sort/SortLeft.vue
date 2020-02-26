<template>
  <div>
    <ul class="navList">
      <li v-for="(navItem, index) in navList" :key="index">
        <router-link :to="`/cate/right/${navItem.id}`">
          {{navItem.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script> 
export default {
  data(){
    return{
      navList:[]
    }
  },
    async mounted(){
        let result = await this.$API.getSortNavList()
        console.log(result)
        this.navList = result.categoryL1List
    
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navList
    li
      text-align center
      height 100px
      line-height 100px
 
</style>
