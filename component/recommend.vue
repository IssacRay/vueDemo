<template>
	<div>
		<div class="top_margin"></div>
		<relist></relist>
		<relist></relist>
		<relist></relist>
	</div>
</template>

<script>
	import relist from "./relist.vue";

	module.exports={
		components:{
			relist,
		}
	}
</script>
<style>
	.top_margin{
		width: 100%;
		height:10px;
	}
</style>