<template>
	<div>
		<!-- <rheader></rheader> -->
		<!-- <rtop></rtop> -->
		<ntop></ntop>
		<router-view></router-view>
		<!-- <rfooter></rfooter> -->
	</div>
</template>

<script>
	import rfooter from "./rfooter.vue";
	import rheader from "./rheader.vue";
	import rtop from "./rtop.vue";
	import ntop from "./ntop.vue";
	module.exports={
		data:function(){
			return {
				title:"首页"
			}
		},
		components:{
			rfooter:rfooter,
			rheader:rheader,
			rtop:rtop,
			ntop:ntop,
		}
	}
</script>
