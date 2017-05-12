<template>
	<div>
		<rheader></rheader>
		<rtop></rtop>
		<router-view></router-view>
		<rfooter></rfooter>
	</div>
</template>

<script>
	import rfooter from "./rfooter.vue";
	import rheader from "./rheader.vue";
	import rtop from "./rtop.vue";
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
		}
	}
</script>
