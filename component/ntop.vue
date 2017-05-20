<template>
<div id="ntop">
<!-- <span>22</span> -->
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="TAB ONE"/>
    <mu-tab value="tab2" title="TAB TWO"/>
    <mu-tab value="tab3" title="TAB ACTIVE"/>
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