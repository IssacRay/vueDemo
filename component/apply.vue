<template>
	<div>
		<!-- <p v-text="atk"></p> -->
		<!-- <wload></wload>	 -->
		<elist></elist>
	</div>
</template>

<script>
	import $ from "jquery";
	// import wload from "./wload.vue";
	// import rmas from "./rmas.vue";
	import elist from "./elist.vue";

	module.exports={
		data:function(){
			return {
				atk:""
			}
		},
		methods:{
			getuser:function(){
				var self =this;
				$.ajax({
					type:"post",
					url:"https://cnodejs.org/api/v1/accesstoken",
					data:{
						accesstoken: self.atk,
					},
					success:function(data){
						console.log(data);
					}
				})
			}
		},
		components:{
			// wload,
			// rmas,
			elist,

		},
		mounted:function(){
			this.$store.commit('setindexRouterId',2);
		}

	}
</script>
	