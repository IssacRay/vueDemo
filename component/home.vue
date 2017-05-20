<template>
	<div>
		<swiper></swiper>
		<rlist></rlist>
		<rmas v-show="false"></rmas>
	</div>
</template>

<script>
	import swiper from "./swiper.vue";
	import rlist from "./rlist.vue";
	import rmas from "./rmas.vue";

	module.exports={
		computed:{

		},
		components:{
			swiper:swiper,
			rlist:rlist,
			rmas:rmas,
		}
	}
</script>