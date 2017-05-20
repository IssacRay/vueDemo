<template>
	<div>
		<!-- <div class="top_margin"></div> -->
		<relist></relist>
	</div>
</template>

<script>
	import relist from "./relist.vue";

	module.exports={
		data:function(){
			return {
				title:"推荐",
			}
		},
		components:{
			relist,
		},
		computed:{
			
		}
	}
</script>
<style>
	.top_margin{
		width: 100%;
		height:10px;
	}
</style>