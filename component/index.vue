<template>
	<div>
		<rheader></rheader>
		<router-view></router-view>
		<rnav></rnav>
		<!-- <ntop></ntop> -->
		<!-- <rfooter></rfooter> -->
	</div>
</template>

<script>
	// import rfooter from "./rfooter.vue";
	import rheader from "./rheader.vue";
	import rnav from "./rnav.vue";
	// import ntop from "./ntop.vue";
	module.exports={
		data:function(){
			return {
				title:"首页"
			}
		},
		components:{
			// rfooter:rfooter,
			rheader:rheader,
			rnav:rnav,
			// ntop:ntop,
		}
	}
</script>
