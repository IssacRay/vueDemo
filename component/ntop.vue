<template>
<div id="ntop">
<!-- <span>22</span> -->
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="首页"/>
    <mu-tab value="tab2" title="推荐"/>
    <mu-tab value="tab3" title="应用"/>
  </mu-tabs>

</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
  }
}
</script>
<style scoped> 
/* #ntop{
      padding-left:36px;
      background-color: #7e57c2;
      position:relative;
    }
  span{
    position: absolute;
    top: 4px;
    left:4px;
  }*/
</style>